import { Component, Input } from "@angular/core";

@Component({
    selector: "bucket",
    templateUrl: "./bucket.component.html",
    styleUrls: ["./bucket.component.scss"]
})
export class BucketComponent {
    @Input() label: string;
    @Input() budgetedAmount: number;
    @Input() spentAmount: number;
}
