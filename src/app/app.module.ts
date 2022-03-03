import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainViewModule } from "./main-view/main-view.module";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, MainViewModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
