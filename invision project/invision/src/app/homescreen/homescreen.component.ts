import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { AddSadminComponent } from '../add-sadmin/add-sadmin.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
name:any= 'Joen Dome';
click=false;

  constructor(private md:MatDialog) { }

  ngOnInit(): void {
 
  
    
  }
plus(){
  
  this.click =!this.click

  localStorage.setItem('user1','Aisiri');
  sessionStorage.setItem('user2','Nuthan');
  // this.name=localStorage.getItem('user1');
  this.name=sessionStorage.getItem('user2')
}
opendialog1(){
  this.md.open(ChangepasswordComponent)
}
opendialog2(){
  this.md.open(AddAdminComponent)
}
opendialog3(){
  this.md.open(AddSadminComponent)
}
}
