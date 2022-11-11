import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { InvisionService } from '../invision.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-sadmin',
  templateUrl: './add-sadmin.component.html',
  styleUrls: ['./add-sadmin.component.css']
})
export class AddSadminComponent implements OnInit {

 
  click=false;
  sadmins:any;
  updateableadmin:any
  button=true;

  constructor(private form:FormBuilder, private service:InvisionService) { }
  @ViewChild('aname') inputname:any;
  @ViewChild('acode') inputcode:any;
  @ViewChild('aemail') inputemail:any;
  ngOnInit(): void {
    this.sadminsjson()
  }
  aadmin= this.form.group({
    name:[''],
    code:[''],
    email:['']
  })
  add(){
    const newform= { name : this.aadmin.get('name')?.value, code:this.aadmin.get('code')?.value, email: this.aadmin.get('email')?.value}
    this.service.addsadmin(newform).subscribe(data => {
      this.sadminsjson()
      this.inputname.nativeElement.value=''
      this.inputcode.nativeElement.value=''
      this.inputemail.nativeElement.value=''
      // this.router.navigateByUrl('/homescreen')
    })
   
  }
  
  edit(data:any){
    this.button=false
  this.updateableadmin = data
  this.aadmin.controls['name'].setValue(data.name)
  this.aadmin.controls['code'].setValue(data.code)
  this.aadmin.controls['email'].setValue(data.email)
  
  }
  
  update(){
    this.button=true
    this.inputname.nativeElement.value=''
      this.inputcode.nativeElement.value=''
      this.inputemail.nativeElement.value=''
  const newform= {name : this.aadmin.get('name')?.value, code:this.aadmin.get('code')?.value, email: this.aadmin.get('email')?.value}
  
  this.service.updatesadmin(newform, this.updateableadmin.id).subscribe(data => {
    console.log('hhh');
    this.sadminsjson()
    console.log(this.updateableadmin.id)
    
  })
  }
  
  sadminsjson(){
    this.service.getsadmins().subscribe(data => {
      this.sadmins = data
    })
  }
  
  
  
  deleteadmin(id:any){
    if( confirm("Are you sure you want to delete...!")){
      this.service.deletesadmin(id.id).subscribe(data =>  this.sadminsjson())
    }
  
    
  }
}
