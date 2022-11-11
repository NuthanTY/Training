import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EmailcheckComponent } from './emailcheck/emailcheck.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import {LoginGuard} from './login.guard';
import { PermissionGuard } from './permission.guard';

const routes: Routes = [
  {path: '' , component:LoginComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent, canActivate:[LoginGuard]},
  {path:'email',component:EmailcheckComponent,canActivate:[PermissionGuard]},
  {path:'homescreen',component:HomescreenComponent, canActivate:[PermissionGuard]},
  {path:'changepassword',component:ChangepasswordComponent,canActivate:[PermissionGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings =[LoginComponent,EmailcheckComponent,HomescreenComponent,ChangepasswordComponent]
