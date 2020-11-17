import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../../core/guards";
import { LayoutComponent } from "../../core/layout/layout.component";
import { TestComponent } from "./test.component";

const testRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: TestComponent
      }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
