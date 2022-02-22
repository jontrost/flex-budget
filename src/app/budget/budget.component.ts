import { Component, Input } from "@angular/core";
import { Category } from "src/shared/models/category.model";

@Component({
    selector: "budget",
    templateUrl: "./budget.component.html",
    styleUrls: ["./budget.component.scss"]
})
export class BudgetComponent {
    @Input() categories: Category[];
}
