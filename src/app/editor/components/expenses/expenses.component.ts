import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Expense } from "src/shared/models/frontend/expense.model";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "expenses",
    templateUrl: "./expenses.component.html",
    styleUrls: ["./expenses.component.scss"]
})
export class ExpensesComponent implements OnInit {
    expenses: Observable<Expense[]>;
    @Input() categoryId: string;
    @Input() fundId: string;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.expenses = this.apiService.getExpensesForFund(this.categoryId, this.fundId);
    }
}
