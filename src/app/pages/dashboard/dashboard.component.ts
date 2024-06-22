import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NavigationPanelComponent } from "../../components/navigation-panel/navigation-panel.component";
import { SecondaryActionsPanelComponent } from "../../components/secondary-actions-panel/secondary-actions-panel.component";
import { DatagridComponent } from "../../components/grid/datagrid/datagrid.component";
import { EmployeeService } from "../../services/employee.service";

import { ColDef } from "ag-grid-community";
import { generateDashboardData } from "../../utils/transformers";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "../../components/loading/loading.component";
import { LineChartComponent } from "../../components/charts/line-chart/line-chart.component";
import { PieChartComponent } from "../../components/charts/pie-chart/pie-chart.component";
import { VerticalBarChartComponent } from "../../components/charts/vertical-bar-chart/vertical-bar-chart.component";
@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    NavigationPanelComponent,
    SecondaryActionsPanelComponent,
    DatagridComponent,
    LoadingComponent,
    LineChartComponent,
    PieChartComponent,
    VerticalBarChartComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent implements OnInit {
  api: any;
  employees: any = null;
  loading: boolean = true;
  earnings: any = null;
  tax: any = null;
  uif: any = null;
  distribution: any = null;
  team: any = null;

  constructor(private service: EmployeeService) {
    this.api = service;
  }

  async getEmployees() {
    const { earnings, tax, uif, payroll_distribution, team_distribution } =
      generateDashboardData(await this.api.getEmployeePayroll());
    this.earnings = Object.keys(earnings).map((key: any, index) => {
      return {
        name: key,
        series: earnings[key].map((item: any) => ({
          name: key,
          value: Number(item.amount),
        })),
      };
    });
    this.tax = Object.keys(earnings).map((key: any, index) => {
      return {
        name: key,
        series: tax[key].map((item: any) => ({
          name: key,
          value: Number(item.value),
        })),
      };
    });
    this.uif = Object.keys(earnings).map((key: any, index) => {
      return {
        name: key,
        series: uif[key].map((item: any) => ({
          name: key,
          value: Number(item.value),
        })),
      };
    });
    this.team = team_distribution;
    console.log("payroll_distribution: ", team_distribution);
    this.distribution = payroll_distribution;
    this.loading = false;
  }

  ngOnInit(): void {
    console.log("DashboardComponent initialized");
    this.getEmployees();
  }
}
