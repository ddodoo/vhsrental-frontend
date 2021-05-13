import {Component} from '@angular/core';

export interface CustomerData {
  id: number;
  name: string;
  status: string;
  date: string;
}

const ELEMENT_DATA: CustomerData[] = [
  {id: 1, name: 'Daniel Dodoo', status: "Paid", date: '2021-05-09'},
  {id: 2, name: 'Dennis Obel', status: "Pending", date: '2021-05-09'},
  {id: 3, name: 'Daniel Dake', status: "Not Paid", date: '2021-05-09'},
  {id: 4, name: 'Jocelyn Balangtaa', status: "Pending", date: '2021-05-09'},
  {id: 5, name: 'Ebenezer Boampong', status: "Not Paid", date: '2021-05-09'},
  {id: 6, name: 'Donald Seanedzu', status:"Not Paid", date: '2021-05-09'},
  {id: 7, name: 'Enoch Bonsu', status:"Pending", date: '2021-05-09'},
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent{

  displayedColumns: string[] = ['id', 'name', 'status', 'date'];
  dataSource = ELEMENT_DATA;
}
