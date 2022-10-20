import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
 
interface user {
  name:string,
  email:string
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
 
  add(body:any){

    
   return this.http.post('https://jsonplaceholder.typicode.com/users',body)
  }
 

  getusers():Observable<user>{
    const head =new HttpHeaders({
      'content-type':'app',
      'authenticationkey':'120676576587'
    })

    const parm = new HttpParams()
    .set('page','100')
    .set('num','23')
   return this.http.get<user>('https://jsonplaceholder.typicode.com/users',{headers: head , params:parm})
  }
}
