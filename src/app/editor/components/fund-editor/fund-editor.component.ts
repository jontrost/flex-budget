import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "fund-editor",
    templateUrl: "./fund-editor.component.html",
    styleUrls: ["./fund-editor.component.scss"]
})
export class FundEditorComponent implements OnInit {
    formGroup: FormGroup;
    categoryNames: Observable<string[]>;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            budgetedAmount: new FormControl(null, Validators.required),
            categoryName: new FormControl(null, Validators.required),
            name: new FormControl(null, Validators.required)
        });
        this.categoryNames = this.apiService.getCategoryNames();
    }

    saveData(): void {
        this.apiService.createFund(
            this.formGroup.get("budgetedAmount")?.value,
            this.formGroup.get("categoryName")?.value,
            this.formGroup.get("name")?.value
        );
    }
}
