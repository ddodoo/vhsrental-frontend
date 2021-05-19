import {Component} from '@angular/core';

export interface CustomerData {
 
  name: string;
  date: string;
}

const ELEMENT_DATA: CustomerData[] = [
  {name: 'Daniel Dodoo', date: '2021-05-09'},
  {name: 'Dennis Obel', date: '2021-05-09'},
  {name: 'Daniel Dake', date: '2021-05-09'},
  {name: 'Jocelyn Balangtaa', date: '2021-05-09'},
  {name: 'Ebenezer Boampong', date: '2021-05-09'},
  {name: 'Donald Seanedzu', date: '2021-05-09'},
  {name: 'Enoch Bonsu', date: '2021-05-09'},
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent{

  displayedColumns: string[] = [ 'date','name','approval'];
  dataSource = ELEMENT_DATA;
}
