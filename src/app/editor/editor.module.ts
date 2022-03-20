import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

import { CategoryEditorComponent } from "./components/category-editor/category-editor.component";
import { ExpenseEditorComponent } from "./components/expense-editor/expense-editor.component";
import { FundEditorComponent } from "./components/fund-editor/fund-editor.component";
import { EditorRoutingModule } from "./editor-routing.module";

@NgModule({
    declarations: [FundEditorComponent, CategoryEditorComponent, ExpenseEditorComponent],
    imports: [
        CommonModule,
        EditorRoutingModule,
        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule
    ]
})
export class EditorModule {}
