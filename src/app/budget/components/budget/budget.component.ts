import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "src/shared/models/frontend/category.model";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "budget",
    templateUrl: "./budget.component.html",
    styleUrls: ["./budget.component.scss"]
})
export class BudgetComponent implements OnInit {
    categories: Observable<Category[]>;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.categories = this.apiService.getCategories();
    }
}
