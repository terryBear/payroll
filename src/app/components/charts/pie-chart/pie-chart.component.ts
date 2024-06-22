import { Component, Input } from "@angular/core";
import { NgxChartsModule, Color, ScaleType } from "@swimlane/ngx-charts";
import { prettyNumber } from "../../../utils/transformers";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pie-chart",
  standalone: true,
  imports: [NgxChartsModule, CommonModule],
  templateUrl: "./pie-chart.component.html",
  styleUrl: "./pie-chart.component.scss",
})
export class PieChartComponent {
  @Input() data: any[] = [];
  @Input() isDoughnut: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = false;
  colorScheme: Color = {
    name: "primary",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#5AA454", "#C7B42C", "#AAAAAA"],
  };

  prettyNumber(data: any) {
    return prettyNumber(data);
  }
}
