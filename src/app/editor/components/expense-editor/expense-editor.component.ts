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

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            cost: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required)
        });
    }

    saveData(): void {
        this.apiService.createExpense(
            this.formGroup.get("cost")?.value,
            this.formGroup.get("date")?.value,
            this.formGroup.get("name")?.value
        );
    }
}
