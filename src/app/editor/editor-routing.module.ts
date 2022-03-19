import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CategoryEditorComponent } from "./components/category-editor/category-editor.component";
import { FundEditorComponent } from "./components/fund-editor/fund-editor.component";

const routes: Routes = [
    {
        path: "fund",
        pathMatch: "full",
        component: FundEditorComponent
    },
    {
        path: "category",
        pathMatch: "full",
        component: CategoryEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule {}
