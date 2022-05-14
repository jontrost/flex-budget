import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Category } from "src/shared/models/frontend/category.model";
import { ApiService } from "src/shared/services/api.service";

interface ParentIds {
    categoryId: string;
    fundId: string;
}

@Component({
    selector: "expense-editor",
    templateUrl: "./expense-editor.component.html",
    styleUrls: ["./expense-editor.component.scss"]
})
export class ExpenseEditorComponent implements OnInit {
    formGroup: FormGroup;
    categories: Observable<Category[]>;

    constructor(private apiService: ApiService) {}

    async ngOnInit(): Promise<void> {
        this.categories = this.apiService.getCategoriesForExpenseEditorDropdown();
        this.formGroup = new FormGroup({
            cost: new FormControl(history.state.cost, Validators.required),
            date: new FormControl(history.state.date, Validators.required),
            name: new FormControl(history.state.name, Validators.required),
            parentIds: new FormControl(
                { categoryId: history.state.categoryId, fundId: history.state.fundId },
                Validators.required
            )
        });
    }

    saveData(): void {
        if (history.state._id != null) {
            this.apiService.updateExpense(
                history.state._id,
                history.state.categoryId,
                this.formGroup.get("fundId")?.value,
                {
                    cost: this.formGroup.get("cost")?.value,
                    date: this.formGroup.get("date")?.value,
                    name: this.formGroup.get("name")?.value
                }
            );
        } else {
            this.apiService.createExpense(
                this.formGroup.get("parentIds")?.value.categoryId,
                this.formGroup.get("parentIds")?.value.fundId,
                {
                    cost: this.formGroup.get("cost")?.value,
                    date: this.formGroup.get("date")?.value,
                    name: this.formGroup.get("name")?.value
                }
            );
        }
    }

    selectComparator(optionValue: ParentIds, selectionValue: ParentIds): boolean {
        return optionValue.fundId === selectionValue.fundId;
    }
}
