import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeesComponent } from "./employees/employees.component";
import { ComponentsModule } from "../components/components.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    HomeComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeesComponent,
  ],
})
export class PagesModule {}
