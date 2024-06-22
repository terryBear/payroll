import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { AgGridAngular } from "ag-grid-angular";
import {
  ColDef,
  ModuleRegistry,
  SelectionChangedEvent,
  GridReadyEvent,
  GridApi,
  GridOptions,
  createGrid,
  GetContextMenuItemsParams,
} from "ag-grid-community";
import { ClientSideRowModelModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { MatFormField } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: "app-datagrid",
  standalone: true,
  imports: [
    AgGridAngular,
    MatFormField,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./datagrid.component.html",
  styleUrl: "./datagrid.component.scss",
})
export class DatagridComponent implements OnInit, OnChanges {
  @Input() title: string | null = null;
  @Input() rowData: any[] = [];
  @Input() colDefs: ColDef[] = [];
  @Output() rowSelectedEvent = new EventEmitter<any>();

  data: any[] = [];
  searchtext: string = "";
  showReset: boolean = false;
  private gridApi!: GridApi;
  gridOptions: GridOptions = {
    columnDefs: this.colDefs,
    rowData: null,
    autoSizeStrategy: {
      type: "fitGridWidth",
      defaultMinWidth: 100,
    },
  };
  gridDiv = document.querySelector<HTMLElement>("#dataGrid")!;

  sizeToFit() {
    this.gridApi!.sizeColumnsToFit({
      defaultMinWidth: 100,
    });
  }

  applyFilter(event: Event) {
    const term = (event.target as HTMLInputElement)?.value;
    if (term?.length > 2) {
      const searchResults = this.rowData.filter((row) => {
        return Object.keys(row).some((key) => {
          return new RegExp(term, "gi").test(row[key]);
        });
      });
      this.rowData = Object.assign([], searchResults);
      this.checkData();
    }
  }

  resetData() {
    this.searchtext = "";
    this.rowData = Object.assign([], this.data);
    this.checkData();
  }

  checkData() {
    this.showReset = this.data.length !== this.rowData.length;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = Object.assign([], this.rowData);
  }

  async onRowSelected(event: SelectionChangedEvent) {
    const selectedData = await this.gridApi.getSelectedRows();
    console.log("selectedData", selectedData[0]);
    this.rowSelectedEvent.emit(selectedData[0]);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  ngOnInit(): void {
    this.gridApi = createGrid(this.gridDiv, this.gridOptions);
  }
  exportToExcel() {
    this.gridApi.exportDataAsExcel();
  }

  getContextMenuItems(params: GetContextMenuItemsParams) {
    return [
      {
        name: "Export to Excel",
        action: () => this.exportToExcel(),
      },
    ];
  }
}
