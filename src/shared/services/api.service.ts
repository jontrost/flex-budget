import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CREATE_CATEGORY_MUTATION } from "../constants/mutations/create-category-mutation";
import { CREATE_EXPENSE_MUTATION } from "../constants/mutations/create-expense-mutation";
import { CREATE_FUND_MUTATION } from "../constants/mutations/create-fund-mutation";
import { UPDATE_EXPENSE_MUTATION } from "../constants/mutations/update-expense-mutation";
import { GET_CATEGORIES_QUERY } from "../constants/queries/get-categories-query";
import { GET_EXPENSE_BY_ID_QUERY } from "../constants/queries/get-expense-by-id-query";
import { GET_EXPENSES_QUERY } from "../constants/queries/get-expenses-query";
import { CategoriesResponse } from "../models/api/categories-response.model";
import { CreateCategoryResponse } from "../models/api/create-category-response.model";
import { CreateExpenseResponse } from "../models/api/create-expense-response.model";
import { CreateFundResponse } from "../models/api/create-fund-response.model";
import { ExpenseResponse } from "../models/api/expense-response-model";
import { ExpensesResponse } from "../models/api/expenses-response.model";
import { UpdateExpenseResponse } from "../models/api/update-expense-response.model";
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

    getExpenses(): Observable<Expense[]> {
        return this.apollo
            .watchQuery<ExpensesResponse>({
                query: GET_EXPENSES_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.expenses));
    }

    getExpenseById(id: string): Observable<Expense> {
        return this.apollo
            .watchQuery<ExpenseResponse>({
                query: GET_EXPENSE_BY_ID_QUERY,
                variables: {
                    id
                }
            })
            .valueChanges.pipe(map((response) => response.data.expense));
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

    createExpense(cost: number, date: string, name: string): void {
        this.apollo
            .mutate<CreateExpenseResponse>({
                mutation: CREATE_EXPENSE_MUTATION,
                variables: {
                    cost,
                    date,
                    name
                }
            })
            .subscribe({
                next: ({ data }) => {
                    console.log(data?.createExpense);
                },
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    createFund(budgetedAmount: number, categoryId: string, name: string): void {
        this.apollo
            .mutate<CreateFundResponse>({
                mutation: CREATE_FUND_MUTATION,
                variables: {
                    budgetedAmount,
                    categoryId,
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

    updateExpense(id: string, cost: number, date: string, name: string): void {
        this.apollo
            .mutate<UpdateExpenseResponse>({
                mutation: UPDATE_EXPENSE_MUTATION,
                variables: {
                    id,
                    cost,
                    date,
                    name
                }
            })
            .subscribe({
                next: ({ data }) => {
                    console.log(data?.updateExpense);
                },
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }
}
