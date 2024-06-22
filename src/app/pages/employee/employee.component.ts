import { Component, inject, OnInit } from "@angular/core";
import { ColDef } from "ag-grid-community";
import { NavigationPanelComponent } from "../../components/navigation-panel/navigation-panel.component";
import { SecondaryActionsPanelComponent } from "../../components/secondary-actions-panel/secondary-actions-panel.component";
import { DatagridComponent } from "../../components/grid/datagrid/datagrid.component";
import { EmployeeService } from "../../services/employee.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { prettyDate, prettyNumber } from "../../utils/transformers";

@Component({
  selector: "app-employee",
  standalone: true,
  imports: [
    CommonModule,
    NavigationPanelComponent,
    SecondaryActionsPanelComponent,
    DatagridComponent,
    MatIconModule,
  ],
  templateUrl: "./employee.component.html",
  styleUrl: "./employee.component.scss",
})
export class EmployeeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  api: any;
  employee: any = null;
  rowData: any[] = [];
  coldefs: ColDef[] = [];

  constructor(private service: EmployeeService, private router: Router) {
    this.api = service;
  }

  async getEmployee(id: number) {
    this.employee = await this.api.getEmployeeById(id);
    console.log("Employee: ", this.employee);
    this.rowData = [...this.employee.payroll];
    this.coldefs = Object.keys(this.employee.payroll[0]).map((key) => {
      if (key === "tax") {
        return {
          field: key,
          header: "PAYE",
          suppressSizeToFit: true,
          valueFormatter: (params: any) => prettyNumber(params.value),
        };
      }
      if (key === "uif") {
        return {
          field: key,
          suppressSizeToFit: true,
          valueFormatter: (params: any) => prettyNumber(params.value),
        };
      }
      if (key === "amount") {
        return {
          field: key,
          suppressSizeToFit: true,
          valueFormatter: (params: any) => prettyNumber(params.value),
        };
      }
      if (key === "date") {
        return {
          field: key,
          suppressSizeToFit: true,
          valueFormatter: (params: any) => prettyDate(params.value),
        };
      }
      if (key === "id") {
        return { field: key, width: 70, suppressSizeToFit: true };
      }
      return { field: key, suppressSizeToFit: true };
    });
  }

  onRowSelected(event: any) {
    console.log("Row selected: ", event);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.getEmployee(Number(id));
    }
  }

  prettyNumber(value: any) {
    return prettyNumber(value);
  }

  goBack() {
    this.router.navigate(["/auth/employees"]);
  }
}
