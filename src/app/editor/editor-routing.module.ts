import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoryEditorComponent } from "./components/category-editor/category-editor.component";
import { ExpenseEditorComponent } from "./components/expense-editor/expense-editor.component";
import { FundEditorComponent } from "./components/fund-editor/fund-editor.component";

const routes: Routes = [
    {
        path: "category",
        pathMatch: "full",
        component: CategoryEditorComponent
    },
    {
        path: "expense",
        pathMatch: "full",
        component: ExpenseEditorComponent
    },
    {
        path: "fund",
        pathMatch: "full",
        component: FundEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule {}
