import { JsonPipe } from '@angular/common';
import { Injectable } from "@angular/core";
import { AuthguardService } from "../services/authguard.service";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthguardService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var AllUrlData = [
      {
        id: "1",
        url: "contact"
      },
      {
        id: "2",
        url: "User"
      },
      {
        id: "3",
        url: "profile" 
      }
      
    ]
    localStorage.setItem("AllUrlData", JSON.stringify(AllUrlData));
    if (typeof window !== "undefined") {
      if (localStorage.getItem("currentUser")) {
        // logged in so return true
        var objj = JSON. parse(localStorage.getItem("currentUser"));
        var AllUrlDataTemp = JSON. parse(localStorage.getItem("AllUrlData"))
        if(AllUrlDataTemp.length==0)
        {
          this.authService.getAll().subscribe(
            (data) => {
              console.log(data);
              var ss  = data; AllUrlData = ss;
              localStorage.setItem("AllUrlData", JSON.stringify(ss));
            },
      
            (error) => {}
          );
          
        }
        var lenExist = AllUrlData.filter((x) => { return state.url.includes(x.url); }).length;
        if(lenExist>0)
        {
          return true;
        }
        else
        { 
         return false ;
        }
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
