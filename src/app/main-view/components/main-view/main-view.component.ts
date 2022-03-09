import { Component, OnInit } from "@angular/core";
import { Category } from "src/shared/models/frontend/category.model";
import { Expense } from "src/shared/models/frontend/expense.model";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "main-view",
    templateUrl: "./main-view.component.html",
    styleUrls: ["./main-view.component.scss"]
})
export class MainViewComponent implements OnInit {
    sampleCategories: Category[];
    sampleExpenses: Expense[];

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.sampleCategories = this.apiService.getCategories();
        this.sampleExpenses = this.apiService.getExpenses();
    }
}
