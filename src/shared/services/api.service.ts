import { Injectable } from "@angular/core";

import { FundApiData } from "../models/api/fund-api-data.model";
import { Category } from "../models/frontend/category.model";
import { Expense } from "../models/frontend/expense.model";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    getCategories(): Category[] {
        return [
            {
                name: "Category 1",
                funds: [
                    {
                        budgetedAmount: 150,
                        name: "name",
                        spentAmount: 50
                    }
                ]
            },
            {
                name: "Category 2",
                funds: [
                    {
                        budgetedAmount: 150,
                        name: "name",
                        spentAmount: 50
                    },
                    {
                        budgetedAmount: 100,
                        name: "name",
                        spentAmount: 50
                    }
                ]
            }
        ];
    }

    getCategoryNames(): string[] {
        return ["Category 1", "Category 2", "Category 3"];
    }

    getExpenses(): Expense[] {
        return [
            {
                cost: 50,
                date: new Date(),
                name: "name1"
            },
            {
                cost: 150,
                date: new Date(),
                name: "name2"
            }
        ];
    }

    createFund(fundApiData: FundApiData): void {
        console.log(fundApiData);
    }
}
