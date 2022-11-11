import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { EmailcheckComponent } from './emailcheck/emailcheck.component';
import { routings } from './app-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { MaterialModule } from './material/material.module';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddSadminComponent } from './add-sadmin/add-sadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailcheckComponent,
    routings,
    HomescreenComponent,
    ChangepasswordComponent,
  
    AddAdminComponent,
    AddSadminComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
