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
    sampleDate = new Date();
}
