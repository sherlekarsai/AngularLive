import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TestComponent } from "./test.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import { SharedModule } from "../../shared/shared.module";
import { TestRoutingModule } from "./test-routing.module";
import { TestService } from "./test.service";
import { LoginService } from '../user/login/login.service';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [TestComponent],
  imports: [TestRoutingModule, NgxDatatableModule, ReactiveFormsModule, CoreModule.forRoot(), SharedModule.forRoot(),AgGridModule],
  providers: [TestService, LoginService],
  bootstrap: []
})
export class TestModule {}
 