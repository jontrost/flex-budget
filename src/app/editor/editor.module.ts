import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { CategoryEditorComponent } from "./components/category-editor/category-editor.component";
import { FundEditorComponent } from "./components/fund-editor/fund-editor.component";
import { EditorRoutingModule } from "./editor-routing.module";

@NgModule({
    declarations: [FundEditorComponent, CategoryEditorComponent],
    imports: [
        CommonModule,
        EditorRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class EditorModule {}
