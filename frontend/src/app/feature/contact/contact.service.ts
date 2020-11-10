
import { environment } from "../../../environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { throwError } from "rxjs";

import { ContactModel } from "./contactmodel.model";
import { GlobalConstants } from "../user/login/global-constants";
@Injectable()
export class ContactService {
  public objContact: ContactModel;
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
      this.objContact = new ContactModel();
       this.objContact.EmployeeId = _id;
    return this.http.post(this.strapiendpoint + "/contact/getbyid",this.objContact).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(contact: any) {
    return this.http.post(this.strapiendpoint+ "/contact/create", contact).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(contact: any) {
    return this.http.put(this.strapiendpoint + "/contact/update" + contact._id, contact).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(this.strapiendpoint + "/contact/delete" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
