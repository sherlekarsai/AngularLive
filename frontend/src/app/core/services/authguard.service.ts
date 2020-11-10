
import { environment } from "../../../environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { throwError } from "rxjs";

import { AuthModel } from "../models/authmodel.model";
@Injectable()
export class AuthguardService {
  public objContact: AuthModel;
  constructor(private http: HttpClient) {}
  strapiendpoint: string = "https://uatsys.agsindia.com:7592/uidr/api";
  
  getAll() {
    //console.log(GlobalConstants.apiURL);
    return this.http.get<any[]>(this.strapiendpoint + "/Contact/getall").pipe(
      map((res: any) => res.data), 
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
      this.objContact = new AuthModel();
       this.objContact.EmployeeId = _id;
    return this.http.post(this.strapiendpoint + "/contact/getbyid",this.objContact).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
