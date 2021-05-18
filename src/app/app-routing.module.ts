import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from './orders/orders.component'
import {MoviesComponent} from './products/products.component'

const routes: Routes = [
  {path:"orders",component:OrdersComponent},
  {path:"products", component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
