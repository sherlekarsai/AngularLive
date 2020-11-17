import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./core/guards";
import { AuthguardService } from "./core/services/authguard.service";
import { UserService } from './core/services';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    SharedModule
    ,NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ModalModule.forRoot(),
  ],
  providers: [AuthGuard, AuthguardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
