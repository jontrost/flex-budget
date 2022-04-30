import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { ApiService } from "src/shared/services/api.service";

@Component({
    selector: "category-editor",
    templateUrl: "./category-editor.component.html",
    styleUrls: ["./category-editor.component.scss"]
})
export class CategoryEditorComponent implements OnInit {
    name: FormControl;
    _id: string | null;

    constructor(private apiService: ApiService, private route: ActivatedRoute) {}

    async ngOnInit(): Promise<void> {
        this._id = this.route.snapshot.paramMap.get("_id");
        if (this._id != null) {
            const { name } = await firstValueFrom(this.apiService.getCategoryById(this._id));
            this.name = new FormControl(name, Validators.required);
        } else {
            this.name = new FormControl(null, Validators.required);
        }
    }

    saveData(): void {
        if (this._id != null) {
            this.apiService.updateCategory(this._id, { name: this.name.value });
        } else {
            this.apiService.createCategory(this.name.value);
        }
    }
}
