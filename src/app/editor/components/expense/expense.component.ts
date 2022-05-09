import { Component, Input } from "@angular/core";

@Component({
    selector: "expense",
    templateUrl: "./expense.component.html",
    styleUrls: ["./expense.component.scss"]
})
export class ExpenseComponent {
    @Input() _id: string;
    @Input() name: string;
    @Input() date: string;
    @Input() cost: number;
}
