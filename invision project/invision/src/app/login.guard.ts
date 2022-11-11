import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router : Router) {}

  canActivate(): boolean | UrlTree {
    if(!this.auth.islogged())
      return true;
      
      return this.router.parseUrl('homescreen');
    
  // return false
   
    
  }
  
}
