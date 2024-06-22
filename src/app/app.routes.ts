import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { EmployeesComponent } from "./pages/employees/employees.component";
import { EmployeeComponent } from "./pages/employee/employee.component";

export const routes: Routes = [
  {
    title: "Home",
    path: "auth",
    component: HomeComponent,
    children: [
      {
        title: "Dashboard",
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        title: "Employees",
        path: "employees",
        component: EmployeesComponent,
      },
      {
        title: "Employee Information",
        path: "employee/:id",
        component: EmployeeComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "auth/dashboard",
  },
];
