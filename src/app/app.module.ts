import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BucketComponent } from "./bucket/bucket.component";
import { CategoryComponent } from "./category/category.component";
import { ExpenseComponent } from "./expense/expense.component";
import { ExpensesComponent } from "./expenses/expenses.component";
import { BudgetComponent } from "./budget/budget.component";

@NgModule({
    declarations: [
        AppComponent,
        BucketComponent,
        CategoryComponent,
        ExpenseComponent,
        ExpensesComponent,
        BudgetComponent
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTabsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
