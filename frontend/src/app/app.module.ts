import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./core/guards";
import { AuthguardService } from "./core/services/authguard.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [AuthGuard, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
