export interface CategoryPayload {
    funds?: FundPayload[];
    name: string;
}

export interface ExpensePayload {
    cost: number;
    date: string;
    name: string;
}

export interface FundPayload {
    budgetedAmount: number;
    name: string;
}
