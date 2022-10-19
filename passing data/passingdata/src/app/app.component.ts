import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passingdata';
  submited=false;
  constructor(private form:FormBuilder) { }
Name:any;
Age:any;
Marks:any;
Name2:any;
Age2:any;
Marks2:any;
  parentfunction(data:any){
    this.Name=data.name;
    this.Age=data.age;
    this.Marks=data.marks;
  }

  parentfunction2(data:any){
    this.Name2=data.name;
    this.Age2=data.age;
    this.Marks2=data.marks;
  }



data=  this.form.group({
  name:[''],

})
}
