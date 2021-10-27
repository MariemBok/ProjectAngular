import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainUserComponent } from './main-user/main-user.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainUserComponent,
    ProductComponent,
    ListUserComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
