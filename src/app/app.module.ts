import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BucketComponent } from "./bucket/bucket.component";
import { CategoryComponent } from "./category/category.component";

@NgModule({
    declarations: [AppComponent, BucketComponent, CategoryComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
