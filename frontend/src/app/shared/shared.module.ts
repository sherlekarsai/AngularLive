import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BootstrapModule } from "./bootstrap.module";
import { AgGridModule } from 'ag-grid-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, BootstrapModule,AgGridModule,NgxDatatableModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, BootstrapModule,AgGridModule,NgxDatatableModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return { 
      ngModule: SharedModule,
      providers: []
    };
  }
}
