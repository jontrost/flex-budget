import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";

import { BudgetComponent } from "./components/budget/budget.component";
import { CategoryComponent } from "./components/category/category.component";
import { FundComponent } from "./components/fund/fund.component";

@NgModule({
    declarations: [BudgetComponent, FundComponent, CategoryComponent],
    imports: [CommonModule, MatIconModule, RouterModule],
    exports: [BudgetComponent]
})
export class BudgetModule {}
