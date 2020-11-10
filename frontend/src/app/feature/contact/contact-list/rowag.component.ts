import { Component } from '@angular/core';

@Component({
  selector: 'my-ag',
  templateUrl: './rowag.component.html',
  styleUrls: [ './rowag.component.scss' ]
})
export class RowAGComponent  {

    columnDefs = [
        {field: 'make' },
        {field: 'model' },
        {field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

}