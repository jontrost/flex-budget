import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Category } from "src/shared/models/frontend/category.model";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "fund-editor",
    templateUrl: "./fund-editor.component.html",
    styleUrls: ["./fund-editor.component.scss"]
})
export class FundEditorComponent implements OnInit {
    formGroup: FormGroup;
    categories: Observable<Category[]>;

    constructor(private apiService: ApiService) {}

    async ngOnInit(): Promise<void> {
        this.categories = this.apiService.getCategories();
        this.formGroup = new FormGroup({
            budgetedAmount: new FormControl(history.state.budgetedAmount, Validators.required),
            categoryId: new FormControl(history.state.categoryId, Validators.required),
            name: new FormControl(history.state.name, Validators.required)
        });
    }
    saveData(): void {
        if (history.state._id != null) {
            this.apiService.updateFund(
                history.state._id,
                history.state.categoryId,
                this.formGroup.get("categoryId")?.value,
                {
                    budgetedAmount: this.formGroup.get("budgetedAmount")?.value,
                    name: this.formGroup.get("name")?.value
                }
            );
        } else {
            this.apiService.createFund(this.formGroup.get("categoryId")?.value, {
                budgetedAmount: this.formGroup.get("budgetedAmount")?.value,
                name: this.formGroup.get("name")?.value
            });
        }
    }
}
