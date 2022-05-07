import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "expense-editor",
    templateUrl: "./expense-editor.component.html",
    styleUrls: ["./expense-editor.component.scss"]
})
export class ExpenseEditorComponent implements OnInit {
    formGroup: FormGroup;

    constructor(private apiService: ApiService) {}

    async ngOnInit(): Promise<void> {
        this.formGroup = new FormGroup({
            cost: new FormControl(history.state.cost, Validators.required),
            date: new FormControl(history.state.date, Validators.required),
            name: new FormControl(history.state.name, Validators.required)
        });
    }

    saveData(): void {
        if (history.state._id != null) {
            this.apiService.updateExpense(history.state._id, {
                cost: this.formGroup.get("cost")?.value,
                date: this.formGroup.get("date")?.value,
                name: this.formGroup.get("name")?.value
            });
        } else {
            this.apiService.createExpense({
                cost: this.formGroup.get("cost")?.value,
                date: this.formGroup.get("date")?.value,
                name: this.formGroup.get("name")?.value
            });
        }
    }
}
