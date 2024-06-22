import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LogoComponent } from "./branding/logo/logo.component";
import { EmployeeInformationComponent } from "./employee/employee-information/employee-information.component";
import { EmployeeInformationDetailComponent } from "./employee/employee-information-detail/employee-information-detail.component";
import { DatagridComponent } from "./grid/datagrid/datagrid.component";
import { SearchComponent } from "./grid/search/search.component";
import { LoadingComponent } from "./loading/loading.component";
import { NavigationPanelComponent } from "./navigation-panel/navigation-panel.component";
import { SecondaryActionsPanelComponent } from "./secondary-actions-panel/secondary-actions-panel.component";
import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { VerticalBarChartComponent } from "./charts/vertical-bar-chart/vertical-bar-chart.component";
import { PieChartComponent } from "./charts/pie-chart/pie-chart.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogoComponent,
    EmployeeInformationComponent,
    EmployeeInformationDetailComponent,
    DatagridComponent,
    SearchComponent,
    LoadingComponent,
    NavigationPanelComponent,
    SecondaryActionsPanelComponent,
    LineChartComponent,
    VerticalBarChartComponent,
    PieChartComponent,
  ],
})
export class ComponentsModule {}
