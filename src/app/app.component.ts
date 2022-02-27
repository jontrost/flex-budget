import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "flex-budget";

    sampleCategories = [
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

    sampleExpenses = [
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
