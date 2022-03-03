import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule } from "@angular/material/tabs";
import { MainViewComponent } from "./components/main-view/main-view.component";
import { BudgetModule } from "../budget/budget.module";
import { ExpensesModule } from "../expenses/expenses.module";
import { FloatingActionButtonModule } from "../floating-action-button/floating-action-button.module";

@NgModule({
    declarations: [MainViewComponent],
    imports: [
        CommonModule,
        BudgetModule,
        ExpensesModule,
        FloatingActionButtonModule,
        MatTabsModule
    ],
    exports: [MainViewComponent]
})
export class MainViewModule {}
