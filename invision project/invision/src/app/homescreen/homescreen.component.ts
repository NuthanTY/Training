import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import { AddSadminComponent } from '../add-sadmin/add-sadmin.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { InvisionService } from '../invision.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
name:any;
click=false;

  constructor(private md:MatDialog, private service:InvisionService, private route:Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('name')
    this.name=this.name.replace(/['"]+/g, '')
    
  
    
  }
  login(){
    localStorage.removeItem('name')
    this.route.navigateByUrl('/login')

  }
plus(){
  
  this.click =!this.click

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
