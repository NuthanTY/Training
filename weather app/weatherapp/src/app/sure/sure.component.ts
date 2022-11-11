import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sure',
  templateUrl: './sure.component.html',
  styleUrls: ['./sure.component.css']
})
export class SureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  removeall(){
    localStorage.removeItem('favdata');
    // this.found=true; 
    // this.table=false;
   
    // console.log((this.searchs).length)
    window.location.reload();
  }
}
