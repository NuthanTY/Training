import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailcheckComponent } from './emailcheck/emailcheck.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path:'email',component:EmailcheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routings =[LoginComponent,EmailcheckComponent]
