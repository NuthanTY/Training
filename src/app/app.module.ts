import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routingComponents } from './app-routing.module';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PlaceComponent } from './place/place.component';
import { ProfileComponent } from './profile/profile.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PathnotfoundComponent,
    PersonDetailsComponent,
    PlaceComponent,
    ProfileComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
