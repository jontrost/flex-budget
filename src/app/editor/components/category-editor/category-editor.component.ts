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

    async ngOnInit(): Promise<void> {
        this.name = new FormControl(history.state.name, Validators.required);
    }

    saveData(): void {
        if (history.state._id != null) {
            this.apiService.updateCategory(history.state._id, { name: this.name.value });
        } else {
            this.apiService.createCategory({ name: this.name.value });
        }
    }
}
