import { Component, Input } from "@angular/core";
import { Fund } from "src/shared/models/fund.model";

@Component({
    selector: "category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})
export class CategoryComponent {
    @Input() label: string;
    @Input() funds: Fund[];
}
