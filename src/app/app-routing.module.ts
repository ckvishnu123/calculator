import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApiComponent } from './add-api/add-api.component';
import { AdditionComponent } from './addition/addition.component';
import { PrimeComponent } from './prime/prime.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SubtractComponent } from './subtract/subtract.component';

const routes: Routes = [
  {path:"addition", component:AdditionComponent},
  {path:"sub", component:SubtractComponent},
  {path:"prime", component:PrimeComponent},
  {path:"addapi", component:AddApiComponent},
  {path:"login", component:SigninComponent},
  {path:"register", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
