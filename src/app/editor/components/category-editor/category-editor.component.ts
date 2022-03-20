import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "category-editor",
    templateUrl: "./category-editor.component.html",
    styleUrls: ["./category-editor.component.scss"]
})
export class CategoryEditorComponent implements OnInit {
    name: FormControl;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.name = new FormControl(null, Validators.required);
    }

    saveData(): void {
        this.apiService.createCategory(this.name.value);
    }
}
