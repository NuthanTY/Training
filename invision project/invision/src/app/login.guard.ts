import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanDeactivate<HomescreenComponent> {

  constructor(private auth: AuthService, private router : Router) {}

  canDeactivate(component: HomescreenComponent){
    if( this.auth.islogged()){
      // this.router.navigateByUrl('/homescreen')
      return true
    
    } 
    return false
    
  }
  
}
