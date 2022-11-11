import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface login extends Array<login[]> 
{
  id:number,
  name:string,
  password:string
}

interface admin extends Array<admin[]> {
  name:string,
  code:string,
  email:string
}


@Injectable({
  providedIn: 'root'
})
export class InvisionService {

  constructor(private http:HttpClient) { }

  getusers():Observable<login[]>{
    return this.http.get<login[]>('http://localhost:3000/users')
  }

  update(data:any, id:any ){
    
    return this.http.put('http://localhost:3000/users/' +id , data)
  }

  addadmin(data:any):Observable<admin[]>{
    return this.http.post<admin[]>('http://localhost:3000/admins',data)
  }

  getadmins():Observable<admin[]>{
    return this.http.get<admin[]>('http://localhost:3000/admins')
  }
  updateadmin(data:any, id:any){
    
    return this.http.put('http://localhost:3000/admins/' +id , data)
  }

  deleteadmin(id:any){
    
    return this.http.delete('http://localhost:3000/admins/' +id)
  }
 
  addsadmin(data:any):Observable<admin[]>{
    return this.http.post<admin[]>('http://localhost:3000/sadmins',data)
  }

  getsadmins():Observable<admin[]>{
    return this.http.get<admin[]>('http://localhost:3000/sadmins')
  }
  updatesadmin(data:any, id:any){
    
    return this.http.put('http://localhost:3000/sadmins/' +id , data)
  }

  deletesadmin(id:any){
    
    return this.http.delete('http://localhost:3000/sadmins/' +id)
  }

}
