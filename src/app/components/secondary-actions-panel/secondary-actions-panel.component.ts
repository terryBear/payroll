import { Component } from "@angular/core";
import { NavigationPanelComponent } from "../navigation-panel/navigation-panel.component";

@Component({
  selector: "app-secondary-actions-panel",
  standalone: true,
  imports: [NavigationPanelComponent],
  templateUrl: "./secondary-actions-panel.component.html",
  styleUrl: "./secondary-actions-panel.component.scss",
})
export class SecondaryActionsPanelComponent {
  routes = [
    {
      path: "home",
      icon: "home",
      name: "Action 1",
    },
    {
      path: "dashboard",
      icon: "dashboard",
      name: "Action 2",
    },
  ];
}
