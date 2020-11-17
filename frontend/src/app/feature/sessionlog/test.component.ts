import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { Router } from "@angular/router";      
import { TestService } from "./test.service";
//import { GlobalConstants } from "../../user/login/global-constants";
//import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: "test-contact-list",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"] 
}) 
export class TestComponent {
  @ViewChild('myTable') table: any;

  funder = [];
  calculated = [];
  pending = [];
  groups = [];
  
  editing = {};  
  rows = []; 
  
  constructor(private testService: TestService) {
    // this.contactService.getAll().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.rows = data;
       
    //   }, 

    //   (error) => {}
    // );

    var alldata = {"data":[{"SessionId":"123123", "Start Date":"20201109", "Name":"Login", "Description":"Sai Sherlekar logged in","Type":"login","datetime":"20201109"},
    {"SessionId":"123123", "Start Date":"20201109", "Name":"Login", "Description":"Sai Sherlekar logged in","Type":"login","datetime":"20201109"},
    {"SessionId":"123124", "Start Date":"20201109", "Name":"Login", "Description":"Sai Sherlekar logged in","Type":"login","datetime":"20201109"}
  ],"status":true}
    this.rows = alldata.data;
  }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/forRowGrouping.json`);

  //   req.onload = () => {
  //     cb(JSON.parse(req.response));
  //   };

  //   req.send();
  // }

  getGroupRowHeight(group, rowHeight) {
    let style = {};

    style = {
      height: (group.length * 40) + 'px',
      width: '100%'
    };

    return style;
  }

  updateValue(event, cell, rowIndex) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }  

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
      
}
