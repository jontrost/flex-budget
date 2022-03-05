import { Injectable } from "@angular/core";

import { Category } from "../models/category.model";
import { Expense } from "../models/expense.model";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    getCategories(): Category[] {
        return [
            {
                label: "Category 1",
                funds: [
                    {
                        budgetedAmount: 150,
                        label: "label",
                        spentAmount: 50
                    }
                ]
            },
            {
                label: "Category 2",
                funds: [
                    {
                        budgetedAmount: 150,
                        label: "label",
                        spentAmount: 50
                    },
                    {
                        budgetedAmount: 100,
                        label: "label",
                        spentAmount: 50
                    }
                ]
            }
        ];
    }

    getExpenses(): Expense[] {
        return [
            {
                cost: 50,
                date: new Date(),
                label: "label 1"
            },
            {
                cost: 150,
                date: new Date(),
                label: "label 2"
            }
        ];
    }
}
