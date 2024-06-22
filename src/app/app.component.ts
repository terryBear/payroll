import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, ComponentsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "afgrigistics";
}
