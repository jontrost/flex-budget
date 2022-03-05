import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ExpenseComponent } from "./components/expense/expense.component";
import { ExpensesComponent } from "./components/expenses/expenses.component";

@NgModule({
    declarations: [ExpensesComponent, ExpenseComponent],
    imports: [CommonModule],
    exports: [ExpensesComponent]
})
export class ExpensesModule {}
