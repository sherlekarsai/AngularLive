import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { environment } from "../../../../environments/environment";

@Injectable()
export class LoginService {
  static canReadWrite : string;
  canReadWritee : string;
  constructor(private http: HttpClient) {}
  strapiendpoint: string = "https://uatsys.agsindia.com:7592/uidr/api";
  login(username: string, password: string) {
    return this.http
      .post<any>(this.strapiendpoint + "/contact/authenticate", {
        username: username,
        password: password
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
