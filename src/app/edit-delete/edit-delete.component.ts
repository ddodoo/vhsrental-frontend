import { Component, OnInit } from '@angular/core';


export interface TableElement {
  
  title: string;
}

const ELEMENT_DATA: TableElement[] = [
  {title:"Iron Man"}
 
];


@Component({
  selector: 'app-edit-delete',
  templateUrl: './edit-delete.component.html',
  styleUrls: ['./edit-delete.component.css']
})

export class EditDeleteComponent{

  displayedColumns: string[] = ['image','title','icon'];
  dataSource = ELEMENT_DATA;
}



