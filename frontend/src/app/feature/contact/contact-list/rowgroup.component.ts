import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { NgStyle } from '@angular/common';
import { ColumnMode, SortType, SelectionType } from "@swimlane/ngx-datatable";

@Component({
  selector: 'row-grouping-demo',
  template: `
    <div>
      <h3>
        Row Grouping
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/row-grouping.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        #myTable
        class="material expandable"
        [rows]="rows"
        [groupRowsBy]="'age'"
        [columnMode]="ColumnMode.force"
        [scrollbarH]="true"
        [limit]="4"
        [groupExpansionDefault]="true"
      >
        <!-- Group Header Template -->
        <ngx-datatable-group-header #myGroupHeader (toggle)="onDetailToggle($event)">
          <ng-template let-group="group" let-expanded="expanded" ngx-datatable-group-header-template>
            <div style="padding-left:5px;">
              <a
                href="#"
                [class.datatable-icon-right]="!expanded"
                [class.datatable-icon-down]="expanded"
                title="Expand/Collapse Group"
                (click)="toggleExpandGroup(group)"
              >
                <b>Age: {{ group.value[0].age }}</b>
              </a>
            </div>
          </ng-template>
        </ngx-datatable-group-header>
        <ngx-datatable-column name="Source" prop="source" editable="false" frozenLeft="True"></ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="name" editable="true"></ngx-datatable-column>
        <ngx-datatable-column name="Gender" prop="gender"></ngx-datatable-column>
        <ngx-datatable-column name="Age" prop="age"></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class RowGroupingComponent {
  @ViewChild('myTable') table: any;

  funder = [];
  calculated = [];
  pending = [];
  groups = [];

  editing = {};
  rows = [];

  ColumnMode = ColumnMode;

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://swimlane.github.io/ngx-datatable/assets/data/forRowGrouping.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  getGroupRowHeight(group, rowHeight) {
    let style = {};

    style = {
      height: group.length * 40 + 'px',
      width: '100%'
    };

    return style;
  }

  toggleExpandGroup(group) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader.toggleExpandGroup(group);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}  