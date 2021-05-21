import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from './orders/orders.component'
import {MoviesComponent} from './movies/movies.component'
import {EditDeleteComponent} from './edit-delete/edit-delete.component'

const routes: Routes = [
  {path:"orders",component:OrdersComponent},
  {path:"movies", component:MoviesComponent},
  {path:"edit-delete", component:EditDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
