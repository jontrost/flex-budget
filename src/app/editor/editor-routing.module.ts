import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FundEditorComponent } from "./components/fund-editor/fund-editor.component";

const routes: Routes = [
    {
        path: "",
        component: FundEditorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditorRoutingModule {}
