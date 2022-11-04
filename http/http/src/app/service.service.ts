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

  update(body:any){
    const head = new HttpHeaders({
      'tokenkey':'123123',
      'type':'siri'
    })

    const parms = new HttpParams()
    .set('page','676')
   return this.http.put('https://jsonplaceholder.typicode.com/users/10',body,{headers:head,params:parms})
  }
 
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
