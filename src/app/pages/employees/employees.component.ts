import { Component, OnInit } from "@angular/core";
import { NavigationPanelComponent } from "../../components/navigation-panel/navigation-panel.component";
import { SecondaryActionsPanelComponent } from "../../components/secondary-actions-panel/secondary-actions-panel.component";
import { DatagridComponent } from "../../components/grid/datagrid/datagrid.component";
import { ColDef } from "ag-grid-community";
import { EmployeeService } from "../../services/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-employees",
  standalone: true,
  imports: [
    NavigationPanelComponent,
    SecondaryActionsPanelComponent,
    DatagridComponent,
  ],
  templateUrl: "./employees.component.html",
  styleUrl: "./employees.component.scss",
})
export class EmployeesComponent implements OnInit {
  api: any;
  employees: any[] = [];
  rowData: any[] = [];
  coldefs: ColDef[] = [];

  constructor(private service: EmployeeService, private router: Router) {
    this.api = service;
  }

  async getEmployees() {
    this.employees = await this.api.getEmployees();
    console.log("Employees: ", this.employees);
    this.rowData = [...this.employees];
    this.coldefs = Object.keys(this.employees[0]).map((key) => {
      if (key === "id") {
        return { field: key, width: 100, suppressSizeToFit: true };
      }
      if (key === "team") {
        return {
          field: key,
          suppressSizeToFit: true,
          valueFormatter: (params: any) => String(params.value).toLocaleUpperCase(),
        };
      }
      return { field: key, suppressSizeToFit: false };
    });
  }

  onRowSelected(event: any) {
    console.log("Row selected: ", event);
    this.router.navigate(["/auth/employee", event.id]);
  }

  ngOnInit(): void {
    console.log("DashboardComponent initialized");
    this.getEmployees();
  }
}
