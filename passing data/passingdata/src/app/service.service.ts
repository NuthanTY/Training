import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private content= new BehaviorSubject<any>('default');
public share = this.content.asObservable();
  constructor() { }

  update(data:any){
    this.content.next(data);
    
  }

}
