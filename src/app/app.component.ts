import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    title = "flex-budget";
    sampleBuckets = [
        {
            budgetedAmount: 50,
            label: "label",
            spentAmount: 45
        },
        {
            budgetedAmount: 50,
            label: "label",
            spentAmount: 45
        },
        {
            budgetedAmount: 50,
            label: "label",
            spentAmount: 45
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
