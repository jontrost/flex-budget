import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
    selector: "floating-action-button",
    templateUrl: "./floating-action-button.component.html",
    styleUrls: ["./floating-action-button.component.scss"],
    animations: [
        trigger("fade", [
            transition(":enter", [
                style({ opacity: 0 }),
                animate("150ms ease", style({ opacity: 1 }))
            ]),
            transition(":leave", animate("150ms ease", style({ opacity: 0 })))
        ]),
        trigger("isOpenChange", [
            state(
                "false",
                style({
                    transform: "rotate(0deg)"
                })
            ),
            state(
                "true",
                style({
                    transform: "rotate(45deg)"
                })
            ),
            transition("false => true", animate("150ms ease")),
            transition("true => false", animate("150ms ease"))
        ])
    ]
})
export class FloatingActionButtonComponent {
    isOpen = false;

    toggleFab() {
        this.isOpen = !this.isOpen;
    }
}
