import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";
import { Subject, Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";
import { UserService } from '../../../core/services/user.service';

@Injectable()
export class LoginService {
  static canReadWrite : string;
  canReadWritee : string;
  private userLoggedIn = new Subject<boolean>();
  constructor(private http: HttpClient, private userService: UserService) {

  }
  strapiendpoint: string = "https://uatsys.agsindia.com:7592/uidr/api";
  login(username: string, password: string) {
    return this.http
      .post<any>(this.strapiendpoint + "/contact/authenticate", {
        UserName: username,
        Password: password
      })
      .pipe(
        map(user => {
          // login successful if there"s a jwt token in the response
          if (user && user.data && user.data.Token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            if (typeof window !== "undefined") {
              //this.canReadWritee = "iusd";
              //LoginService.canReadWrite = "iusd";
              localStorage.setItem("currentUser", JSON.stringify(user.data));
            }
          }
         // this.userService.setUserLoggedIn(true)
          return user.data;
        })
      );
  }

  getuserReadWriteValue() {
    if (typeof window !== "undefined") {
      //this.canReadWritee = "iusd";
      //LoginService.canReadWrite = "iusd";
      var objlocal = JSON.parse( localStorage.getItem("currentUser"));
      return "iusd";
      //return "iusd";
    }
  }
  logout() {
    // remove user from local storage to log user out
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentUser");
    }
  }
}
