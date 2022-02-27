import { Component, Input } from "@angular/core";
import { Expense } from "src/shared/models/expense.model";

@Component({
    selector: "expenses",
    templateUrl: "./expenses.component.html",
    styleUrls: ["./expenses.component.scss"]
})
export class ExpensesComponent {
    @Input() expenses: Expense[];
}
