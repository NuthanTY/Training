import { Component, OnInit,Output,EventEmitter,Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ServiceService} from '.././service.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnChanges {
  @Input () parent:any;
  @Input () child:any;
  @Input() submited:any;
  message:any;
 @Output() parentfunction:EventEmitter<any> = new EventEmitter;


  constructor(private form:FormBuilder, private content:ServiceService) { }


  data = this.form.group({
    name:[''],
    age:[''],
    marks:['']
  })

  ngOnChanges(changes: SimpleChanges): void {
    const submitedvalue = changes['submited'];
    if(submitedvalue.currentValue === true){
      this.message="Submited"
    }
    else{
      this.message="Click to submit"
    }
  }




  click(){
   
    this.parentfunction.emit(this.data.value);
  }
  send(text:any){
    this.content.update(text);

    
  }

  
}
