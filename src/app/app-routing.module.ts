import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./main-view/main-view.module").then((m) => m.MainViewModule)
    },
    {
        path: "fund-editor",
        loadChildren: () => import("./editor/editor.module").then((m) => m.EditorModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
