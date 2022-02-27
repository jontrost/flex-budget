import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BudgetModule } from "./budget/budget.module";
import { ExpensesModule } from "./expenses/expenses.module";
import { FloatingActionButtonComponent } from "./floating-action-button/floating-action-button.component";

@NgModule({
    declarations: [AppComponent, FloatingActionButtonComponent],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        BudgetModule,
        ExpensesModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
