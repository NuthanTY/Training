import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor (private auth:AuthService, private route:Router){}
  canActivate():boolean | UrlTree{
if(this.auth.islogged()){
  return true;
}
   else{ 
  return this.route.parseUrl('/login')
   }
    
  
}
}
