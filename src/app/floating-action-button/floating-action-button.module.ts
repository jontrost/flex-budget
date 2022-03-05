import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { FloatingActionButtonComponent } from "./components/floating-action-button/floating-action-button.component";

@NgModule({
    declarations: [FloatingActionButtonComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule],
    exports: [FloatingActionButtonComponent]
})
export class FloatingActionButtonModule {}
