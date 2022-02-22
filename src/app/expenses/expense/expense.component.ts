import { Component, Input } from "@angular/core";

@Component({
    selector: "expense",
    templateUrl: "./expense.component.html",
    styleUrls: ["./expense.component.scss"]
})
export class ExpenseComponent {
    @Input() label: string;
    @Input() date: Date;
    @Input() cost: number;
}
