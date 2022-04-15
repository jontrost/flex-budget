import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "expense-editor",
    templateUrl: "./expense-editor.component.html",
    styleUrls: ["./expense-editor.component.scss"]
})
export class ExpenseEditorComponent implements OnInit {
    formGroup: FormGroup;
    _id: string | null;

    constructor(private apiService: ApiService, private route: ActivatedRoute) {}

    async ngOnInit(): Promise<void> {
        this._id = this.route.snapshot.paramMap.get("_id");
        if (this._id != null) {
            const { cost, date, name } = await firstValueFrom(
                this.apiService.getExpenseById(this._id)
            );
            this.formGroup = new FormGroup({
                cost: new FormControl(cost, Validators.required),
                date: new FormControl(date, Validators.required),
                name: new FormControl(name, Validators.required)
            });
        } else {
            this.formGroup = new FormGroup({
                cost: new FormControl(null, Validators.required),
                date: new FormControl(null, Validators.required),
                name: new FormControl(null, Validators.required)
            });
        }
    }

    saveData(): void {
        if (this._id != null) {
            this.apiService.updateExpense(
                this._id,
                this.formGroup.get("cost")?.value,
                this.formGroup.get("date")?.value,
                this.formGroup.get("name")?.value
            );
        } else {
            this.apiService.createExpense(
                this.formGroup.get("cost")?.value,
                this.formGroup.get("date")?.value,
                this.formGroup.get("name")?.value
            );
        }
    }
}
