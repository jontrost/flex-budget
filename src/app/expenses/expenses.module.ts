import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExpensesComponent } from "./components/expenses/expenses.component";
import { ExpenseComponent } from "./components/expense/expense.component";

@NgModule({
    declarations: [ExpensesComponent, ExpenseComponent],
    imports: [CommonModule],
    exports: [ExpensesComponent]
})
export class ExpensesModule {}
