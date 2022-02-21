import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BucketComponent } from "./bucket/bucket.component";
import { CategoryComponent } from "./category/category.component";
import { ExpenseComponent } from "./expense/expense.component";

@NgModule({
    declarations: [AppComponent, BucketComponent, CategoryComponent, ExpenseComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTabsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
