import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FloatingActionButtonComponent } from "./components/floating-action-button/floating-action-button.component";

@NgModule({
    declarations: [FloatingActionButtonComponent],
    imports: [BrowserAnimationsModule, CommonModule, MatButtonModule, MatIconModule],
    exports: [FloatingActionButtonComponent]
})
export class FloatingActionButtonModule {}
