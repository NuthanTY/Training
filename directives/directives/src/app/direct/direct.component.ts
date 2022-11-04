import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
public clr= true
  nameis = false;

  constructor() { }

  ngOnInit(): void {
  }
persons = [
  "arun",
  'adithya', "abhi"

]
  click(){
    this.nameis=!this.nameis
    
  }

}
