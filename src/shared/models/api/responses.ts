import { Category } from "../frontend/category.model";
import { Expense } from "../frontend/expense.model";
import { Fund } from "../frontend/fund.model";

export interface CreateCategoryResponse {
    createCategory: Category;
}

export interface CreateExpenseResponse {
    createExpense: Expense;
}

export interface CreateFundResponse {
    createFund: Category;
}

export interface GetCategoriesResponse {
    categories: Category[];
}

export interface GetCategoryResponse {
    category: Category;
}

export interface GetExpenseResponse {
    expense: Expense;
}

export interface GetExpensesResponse {
    expenses: Expense[];
}

export interface GetFundResponse {
    fund: Fund;
}

export interface UpdateCategoryResponse {
    updateCategory: Category;
}

export interface UpdateExpenseResponse {
    updateExpense: Expense;
}

export interface UpdateFundResponse {
    updateFund: Category;
}
