import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgxChartsModule, Color, ScaleType } from "@swimlane/ngx-charts";
import { prettyNumber } from "../../../utils/transformers";

@Component({
  selector: "app-vertical-bar-chart",
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: "./vertical-bar-chart.component.html",
  styleUrl: "./vertical-bar-chart.component.scss",
})
export class VerticalBarChartComponent {
  @Input() data: any[] = [];
  @Input() xAxisLabel: string = "";
  @Input() yAxisLabel: string = "";
  @Input() legendTitle: string = "";
  @Input() showXAxis: boolean = true;
  @Input() showYAxis: boolean = true;
  @Input() gradient: boolean = true;
  @Input() showLegend: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  barPadding = 1;
  colorScheme: Color = {
    name: "primary",
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ["#5AA454", "#C7B42C", "#AAAAAA"],
  };

  constructor() {}

  prettyNumber(data: any) {
    return prettyNumber(data);
  }
}
