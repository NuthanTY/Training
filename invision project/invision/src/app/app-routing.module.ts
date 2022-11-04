import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmailcheckComponent } from './emailcheck/emailcheck.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './login.guard';

const routes: Routes = [
  {path: '' , component:LoginComponent,canDeactivate:[LoginGuard]},
  {path:'login',component:LoginComponent, canDeactivate:[LoginGuard]},
  {path:'email',component:EmailcheckComponent},
  {path:'homescreen',component:HomescreenComponent},
  {path:'changepassword',component:ChangepasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings =[LoginComponent,EmailcheckComponent,HomescreenComponent,ChangepasswordComponent]
