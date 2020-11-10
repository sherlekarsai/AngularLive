import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";
import { ActivatedRoute, Router } from "@angular/router";
import {ContactModel} from '../contactmodel.model';
import { LoginService } from "../../user/login/login.service";
@Component({
  selector: "app-contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.scss"]
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactModel;
  acceessProp : string; 
  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, 
    private router: Router,private loginService: LoginService) {
      this.acceessProp = this.loginService.getuserReadWriteValue();
    }

  edit() {
    this.router.navigate(["/contacts/edit/" + this.contact.EmployeeId]);
  }
  ngOnInit(): void {
    this.contact = this.activatedRoute.snapshot.data.contactDetails[0];
  }
}
