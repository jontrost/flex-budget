import { Component, Input } from "@angular/core";

@Component({
    selector: "fund",
    templateUrl: "./fund.component.html",
    styleUrls: ["./fund.component.scss"]
})
export class FundComponent {
    @Input() label: string;
    @Input() budgetedAmount: number;
    @Input() spentAmount: number;
}