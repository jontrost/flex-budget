import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "fund",
    templateUrl: "./fund.component.html",
    styleUrls: ["./fund.component.scss"]
})
export class FundComponent {
    @Input() _id: string;
    @Input() categoryId: string;
    @Input() name: string;
    @Input() budgetedAmount: number;
    @Input() spentAmount: number;

    constructor(private router: Router) {}

    navigateToEditFund() {
        this.router.navigateByUrl("edit/fund", {
            state: { _id: this._id, categoryId: this.categoryId }
        });
    }
}
