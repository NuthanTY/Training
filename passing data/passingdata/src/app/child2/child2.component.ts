import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
 text:any;
  @Input () child:any;
  constructor(private form:FormBuilder, private data: ServiceService) { }
@Output() parentfunction2 :EventEmitter<any>=new EventEmitter
  ngOnInit(): void {
    this.data.share.subscribe(x => this.text=x)
  }
  child2 = this.form.group({
    name:[''],
    age:[''],
    marks:['']
  })
 click(){
  this.parentfunction2.emit(this.child2.value)
 }

}
