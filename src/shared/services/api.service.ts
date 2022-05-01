import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { CREATE_CATEGORY_MUTATION } from "../constants/mutations/create-category-mutation";
import { CREATE_EXPENSE_MUTATION } from "../constants/mutations/create-expense-mutation";
import { CREATE_FUND_MUTATION } from "../constants/mutations/create-fund-mutation";
import { UPDATE_CATEGORY_MUTATION } from "../constants/mutations/update-category-mutation";
import { UPDATE_EXPENSE_MUTATION } from "../constants/mutations/update-expense-mutation";
import { GET_CATEGORIES_QUERY } from "../constants/queries/get-categories-query";
import { GET_CATEGORY_BY_ID_QUERY } from "../constants/queries/get-category-by-id-query";
import { GET_EXPENSE_BY_ID_QUERY } from "../constants/queries/get-expense-by-id-query";
import { GET_EXPENSES_QUERY } from "../constants/queries/get-expenses-query";
import { CategoryPayload } from "../models/api/payloads/category-payload.model";
import { ExpensePayload } from "../models/api/payloads/expense-payload.model";
import { FundPayload } from "../models/api/payloads/fund-payload.model";
import { CreateCategoryResponse } from "../models/api/responses/create-category-response.model";
import { CreateExpenseResponse } from "../models/api/responses/create-expense-response.model";
import { CreateFundResponse } from "../models/api/responses/create-fund-response.model";
import { GetCategoriesResponse } from "../models/api/responses/get-categories-response.model";
import { GetCategoryResponse } from "../models/api/responses/get-category-response.model";
import { GetExpenseResponse } from "../models/api/responses/get-expense-response-model";
import { GetExpensesResponse } from "../models/api/responses/get-expenses-response.model";
import { UpdateCategoryResponse } from "../models/api/responses/update-category-response.model";
import { UpdateExpenseResponse } from "../models/api/responses/update-expense-response.model";
import { Category } from "../models/frontend/category.model";
import { Expense } from "../models/frontend/expense.model";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(private apollo: Apollo) {}

    getCategories(): Observable<Category[]> {
        return this.apollo
            .watchQuery<GetCategoriesResponse>({
                query: GET_CATEGORIES_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.categories));
    }

    getCategoryById(_id: string): Observable<Category> {
        return this.apollo
            .watchQuery<GetCategoryResponse>({
                query: GET_CATEGORY_BY_ID_QUERY,
                variables: {
                    _id
                }
            })
            .valueChanges.pipe(map((response) => response.data.category));
    }

    getExpenses(): Observable<Expense[]> {
        return this.apollo
            .watchQuery<GetExpensesResponse>({
                query: GET_EXPENSES_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.expenses));
    }

    getExpenseById(_id: string): Observable<Expense> {
        return this.apollo
            .watchQuery<GetExpenseResponse>({
                query: GET_EXPENSE_BY_ID_QUERY,
                variables: {
                    _id
                }
            })
            .valueChanges.pipe(map((response) => response.data.expense));
    }

    createCategory(category: CategoryPayload): void {
        const { name } = category;
        this.apollo
            .mutate<CreateCategoryResponse>({
                mutation: CREATE_CATEGORY_MUTATION,
                variables: {
                    name
                }
            })
            .subscribe({
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    createExpense(expense: ExpensePayload): void {
        const { cost, date, name } = expense;
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
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    createFund(categoryId: string, fund: FundPayload): void {
        const { budgetedAmount, name } = fund;
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
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    updateExpense(_id: string, expense: ExpensePayload): void {
        const { cost, date, name } = expense;
        this.apollo
            .mutate<UpdateExpenseResponse>({
                mutation: UPDATE_EXPENSE_MUTATION,
                variables: {
                    _id,
                    cost,
                    date,
                    name
                }
            })
            .subscribe({
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }

    updateCategory(_id: string, category: CategoryPayload): void {
        const { name, funds } = category;
        this.apollo
            .mutate<UpdateCategoryResponse>({
                mutation: UPDATE_CATEGORY_MUTATION,
                variables: {
                    _id,
                    name,
                    funds
                }
            })
            .subscribe({
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }
}
