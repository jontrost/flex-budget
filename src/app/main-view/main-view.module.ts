import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { BudgetModule } from "../budget/budget.module";
import { FloatingActionButtonModule } from "../floating-action-button/floating-action-button.module";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { MainViewRoutingModule } from "./main-view-routing.module";

@NgModule({
    declarations: [MainViewComponent],
    imports: [CommonModule, BudgetModule, FloatingActionButtonModule, MainViewRoutingModule]
})
export class MainViewModule {}
