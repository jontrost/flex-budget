import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FundApiData } from "src/shared/models/api/fund-api-data.model";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "fund-editor",
    templateUrl: "./fund-editor.component.html",
    styleUrls: ["./fund-editor.component.scss"]
})
export class FundEditorComponent implements OnInit {
    formGroup: FormGroup;
    categoryNames: string[];

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
        const fundApiData: FundApiData = {
            budgetedAmount: this.formGroup.get("budgetedAmount")?.value,
            categoryName: this.formGroup.get("categoryName")?.value,
            name: this.formGroup.get("name")?.value
        };
        this.apiService.createFund(fundApiData);
    }
}
