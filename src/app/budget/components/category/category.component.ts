import { Component, Input } from "@angular/core";
import { Fund } from "src/shared/models/frontend/fund.model";

@Component({
    selector: "category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})
export class CategoryComponent {
    @Input() name: string;
    @Input() funds?: Fund[];
}
