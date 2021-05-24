import { Component} from '@angular/core';


export interface TableElement {
  
  title: string;
  imageUrl:string;
}

const ELEMENT_DATA: TableElement[] = [
  {imageUrl:"https://posterspy.com/wp-content/uploads/2018/11/Iron-Man-18x24-Mark-III-small-1.jpg", title:"Iron Man"},
  {imageUrl:"https://th.bing.com/th/id/OIP.1YiH_KyblPsDw_QCwmViUAHaLb?pid=ImgDet&rs=1", title:"Justice League"},
  {imageUrl:"https://moviecultists.com/wp-content/uploads/2009/11/avatar-poster.jpg", title:"Avatar"},
  {imageUrl:"https://fanart.tv/fanart/movies/315635/movieposter/spider-man-homecoming-591b5acfab802.jpg", title:"Spiderman"},
  {imageUrl:"https://i.pinimg.com/originals/ac/43/ca/ac43ca8345fe59f889e4e4ef5dcf650d.png", title:"Logan"}
 
];

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent{

  displayedColumns: string[] = ['image','title','icon'];
  dataSource = ELEMENT_DATA;
}



