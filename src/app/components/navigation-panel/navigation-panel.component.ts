import { Component, Input } from "@angular/core";
import { LogoComponent } from "../branding/logo/logo.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navigation-panel",
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    MatListModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  templateUrl: "./navigation-panel.component.html",
  styleUrl: "./navigation-panel.component.scss",
})
export class NavigationPanelComponent {
  @Input() routes: any[] = [];
  @Input() showlogo: boolean = true;
  @Input() divider: boolean = false;
}
