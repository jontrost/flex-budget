import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ExpenseComponent } from "./expenses/expense/expense.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { FloatingActionButtonComponent } from "./floating-action-button/floating-action-button.component";
import { BudgetModule } from "./budget/budget.module";

@NgModule({
    declarations: [
        AppComponent,
        ExpenseComponent,
        ExpensesComponent,
        FloatingActionButtonComponent
    ],
    imports: [
        BudgetModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
