import { Component } from "@angular/core";
import { LoadingComponent } from "../../components/loading/loading.component";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { NavigationPanelComponent } from "../../components/navigation-panel/navigation-panel.component";
import { SecondaryActionsPanelComponent } from "../../components/secondary-actions-panel/secondary-actions-panel.component";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  imports: [
    LoadingComponent,
    MatButtonModule,
    RouterModule,
    NavigationPanelComponent,
    SecondaryActionsPanelComponent,
  ],
})
export class HomeComponent {
  routes = [
    {
      path: "auth/dashboard",
      icon: "dashboard",
      name: "Dashboard",
    },
    {
      path: "auth/employees",
      name: "Employees",
      icon: "people",
    },
  ];
}
