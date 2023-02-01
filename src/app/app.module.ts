import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractComponent } from './subtract/subtract.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrimeComponent } from './prime/prime.component';
import { NavComponent } from './nav/nav.component';
import { AddApiComponent } from './add-api/add-api.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdditionComponent,
    SubtractComponent,
    PrimeComponent,
    NavComponent,
    AddApiComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
