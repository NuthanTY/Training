import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PlaceComponent } from './place/place.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:"/about" , pathMatch:"full"},
  {path:'about' , component: AboutComponent },
  {
    path:'about/:id', 
    component: PersonDetailsComponent,
    children:[
      {path: 'place' ,component:PlaceComponent},
      {path:'profile', component:ProfileComponent}
    ]
  },
  {path:'contact', component: ContactComponent},
  {path:"**", component: PathnotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [AboutComponent, ContactComponent,PlaceComponent,ProfileComponent,PathnotfoundComponent];
