import { NgModule } from '@angular/core';
import {AngularMaterialModule} from './angular-material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MoviesComponent } from './movies/movies.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    MainNavComponent,
    MoviesComponent,
    EditDeleteComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
