import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { ContactService } from "../contact.service";
import { Router } from "@angular/router";
import { LoginService } from "../../user/login/login.service";
//import { GlobalConstants } from "../../user/login/global-constants";
import { UserService } from "../../../core/services/user.service";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.scss"]
}) 
export class ContactListComponent implements OnInit {
  SortType = SortType;
  contacts: any;
  selected = [];
  SelectionType = SelectionType;
  acceessProp : string; 
  columns = [
    { prop: "FirstName", name: "First Name" },
    { prop: "LastName" },
    // { prop: "email" },
    { prop: "MobileNo" },
    { prop: "City" },
    { prop: "State" }
  ];
  constructor(private contactService: ContactService, private router: Router,private loginService: LoginService, private userService: UserService) {
    this.acceessProp = this.loginService.getuserReadWriteValue();
  }
  getAll() {
    //console.log(GlobalConstants.apiURL);
  //this.loginService.canReadWrite1 = "222";
  
  console.log(this.acceessProp.includes('iusd'));
    this.contactService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.contacts = data;
       
      },

      (error) => {}
    );
   // this.userService.insertsessionlog();
  }
  onSelect(selected: any) {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/contacts/details/" + this.selected[0].EmployeeId]);
  }
  ngOnInit(): void {
    this.getAll();
  }
  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
   //this.mytable.groupHeader.toggleExpandGroup(group);
  }
      
}
