import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Child } from './child/child';
import { ProductsComponent } from './products/products';

@NgModule({
  declarations: [
    App,
    Header,
    Login,
    Contact,
    Home,
    Child
    // <-- DO NOT declare ProductsComponent because it's standalone
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ProductsComponent  // <-- import the standalone component here
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
