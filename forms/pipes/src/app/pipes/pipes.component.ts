import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

    Datetoday: any;
   name:any;

  constructor(private fb:FormBuilder) { }

  form = this.fb .group({
    name:['']
  })

  ngOnInit(): void {
   
    
  }
  go(){
    this.Datetoday = new Date()
    this.name = this.form.get('name')?.value
    console.log(this.name)
  }

}
