import { ModuleWithProviders, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SharedModule } from "../../shared/shared.module";
import { MenuItemNGComponent } from '../components/ngx-bootstrap-menu/menu-item/menu-item-ng.component';
import { NgxBootstrapMenuComponent } from "../components/ngx-bootstrap-menu/nb-menu.component";
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { GlobalConstants } from "../../feature/user/login/global-constants";
// import { MatDividerModule } from "@angular/material/divider";
// import { MatListModule } from "@angular/material/list";
// import { MatButtonModule } from "@angular/material/button";
// import { MatIconModule } from "@angular/material/icon";
// import { MatExpansionModule } from "@angular/material/expansion";
@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, NgxBootstrapMenuComponent, MenuItemNGComponent],
  imports: [ RouterModule, SharedModule, CollapseModule, 
  //  MatDividerModule, MatListModule, MatButtonModule, MatIconModule, MatExpansionModule
  ],
  exports: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent, NgxBootstrapMenuComponent, MenuItemNGComponent],
  providers: [GlobalConstants]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
