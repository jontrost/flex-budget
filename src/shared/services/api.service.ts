import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
    CREATE_CATEGORY_MUTATION,
    CREATE_EXPENSE_MUTATION,
    CREATE_FUND_MUTATION,
    UPDATE_CATEGORY_MUTATION,
    UPDATE_EXPENSE_MUTATION,
    UPDATE_FUND_MUTATION
} from "../constants/mutations";
import {
    GET_CATEGORIES_QUERY,
    GET_CATEGORIES_WITHOUT_FUNDS_QUERY,
    GET_CATEGORY_BY_ID_QUERY,
    GET_EXPENSE_BY_ID_QUERY,
    GET_EXPENSES_FOR_FUND_QUERY,
    GET_FUND_BY_ID_QUERY
} from "../constants/queries";
import { CategoryPayload, ExpensePayload, FundPayload } from "../models/api/payloads";
import {
    CreateCategoryResponse,
    CreateExpenseResponse,
    CreateFundResponse,
    GetCategoriesResponse,
    GetCategoryResponse,
    GetExpenseResponse,
    GetExpensesForFundResponse,
    GetFundResponse,
    UpdateCategoryResponse,
    UpdateExpenseResponse,
    UpdateFundResponse
} from "../models/api/responses";
import { Category } from "../models/frontend/category.model";
import { Expense } from "../models/frontend/expense.model";
import { Fund } from "../models/frontend/fund.model";

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

    getCategoriesWithoutFunds(): Observable<Category[]> {
        return this.apollo
            .watchQuery<GetCategoriesResponse>({
                query: GET_CATEGORIES_WITHOUT_FUNDS_QUERY
            })
            .valueChanges.pipe(map((response) => response.data.categories));
    }

    getExpensesForFund(categoryId: string, fundId: string): Observable<Expense[]> {
        return this.apollo
            .watchQuery<GetExpensesForFundResponse>({
                query: GET_EXPENSES_FOR_FUND_QUERY,
                variables: {
                    categoryId,
                    fundId
                }
            })
            .valueChanges.pipe(map((response) => response.data.expensesForFund));
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

    getFundById(_id: string, categoryId: string): Observable<Fund> {
        return this.apollo
            .watchQuery<GetFundResponse>({
                query: GET_FUND_BY_ID_QUERY,
                variables: {
                    _id,
                    categoryId
                }
            })
            .valueChanges.pipe(map((response) => response.data.fund));
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

    updateFund(_id: string, currentCategoryId: string, newCategoryId: string, fund: FundPayload): void {
        const { budgetedAmount, name } = fund;
        this.apollo
            .mutate<UpdateFundResponse>({
                mutation: UPDATE_FUND_MUTATION,
                variables: {
                    _id,
                    currentCategoryId,
                    newCategoryId,
                    budgetedAmount,
                    name
                },
                refetchQueries: [
                    {
                        query: GET_CATEGORIES_QUERY
                    }
                ]
            })
            .subscribe({
                error: (error) => {
                    console.log("An error occurred: ", error);
                }
            });
    }
}
