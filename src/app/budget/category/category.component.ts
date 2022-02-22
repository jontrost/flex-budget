import { Component, Input } from "@angular/core";
import { Bucket } from "src/shared/models/bucket.model";

@Component({
    selector: "category",
    templateUrl: "./category.component.html",
    styleUrls: ["./category.component.scss"]
})
export class CategoryComponent {
    @Input() label: string;
    @Input() buckets: Bucket[];
}
