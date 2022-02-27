import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BudgetComponent } from "./components/budget/budget.component";
import { CategoryComponent } from "./components/category/category.component";
import { FundComponent } from "./components/fund/fund.component";

@NgModule({
    declarations: [BudgetComponent, FundComponent, CategoryComponent],
    imports: [CommonModule],
    exports: [BudgetComponent]
})
export class BudgetModule {}
