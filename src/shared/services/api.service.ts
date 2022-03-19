import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CREATE_CATEGORY_MUTATION } from "../constants/mutations/create-category-mutation";

import { CREATE_FUND_MUTATION } from "../constants/mutations/create-fund-mutation";
import { GET_CATEGORIES_QUERY } from "../constants/queries/get-categories-query";
import { GET_CATEGORY_NAMES_QUERY } from "../constants/queries/get-category-names-query";
import { GET_EXPENSES_QUERY } from "../constants/queries/get-expenses-query";
import { CategoriesResponse } from "../models/api/categories-response.model";
import { CreateCategoryResponse } from "../models/api/create-category-response.model";
import { CreateFundResponse } from "../models/api/create-fund-response.model";
import { ExpensesResponse } from "../models/api/expenses-response.model";
import { Category } from "../models/frontend/category.model";
import { Expense } from "../models/frontend/expense.model";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(private apollo: Apollo) {}

    getCategories(): Observable<Category[]> {
        return this.apollo
            .watchQuery<CategoriesResponse>({
                query: GET_CATEGORIES_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.categories));
    }

    getCategoryNames(): Observable<string[]> {
        return this.apollo
            .watchQuery<CategoriesResponse>({
                query: GET_CATEGORY_NAMES_QUERY
            })
            .valueChanges.pipe(
                map((response) => response.data.categories.map((category) => category.name))
            );
    }

    getExpenses(): Observable<Expense[]> {
        return this.apollo
            .watchQuery<ExpensesResponse>({
                query: GET_EXPENSES_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.expenses));
    }

    createFund(budgetedAmount: number, categoryName: string, name: string): void {
        this.apollo
            .mutate<CreateFundResponse>({
                mutation: CREATE_FUND_MUTATION,
                variables: {
                    budgetedAmount,
                    categoryName,
                    name
                }
            })
            .subscribe({
                next: ({ data }) => {
                    console.log(data?.createFund);
                },
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    createCategory(name: string): void {
        this.apollo
            .mutate<CreateCategoryResponse>({
                mutation: CREATE_CATEGORY_MUTATION,
                variables: {
                    name
                }
            })
            .subscribe({
                next: ({ data }) => {
                    console.log(data?.createCategory);
                },
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }
}
