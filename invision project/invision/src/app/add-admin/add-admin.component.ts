import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvisionService } from '../invision.service';
import { Router } from '@angular/router';
import * as cryptojs from 'crypto-js';
 
@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
encryptcode:any;
dycriptcode:any;
code:any;
name:any;
click=false;
admins:any;
updateableadmin:any
button=true;
  constructor(private service:InvisionService, private form:FormBuilder, private router:Router) { }
@ViewChild('aname') inputname:any;
@ViewChild('acode') inputcode:any;
@ViewChild('aemail') inputemail:any;
  ngOnInit(): void {
    this.adminsjson();
   
  }
admin= this.form.group({
  name:[''],
  code:[''],
  email:['']
})

updateform=this.form.group({
  name:[''],
  code:[''],
  email:['']
})

encrypt(){
  this.code = this.admin.get('code')?.value;
  this.name = this.admin.get('name')?.value;
this.encryptcode=cryptojs.AES.encrypt(this.code.trim(),this.name.trim()).toString();
console.log(this.encryptcode);
}

dycript(){
  this.dycriptcode = cryptojs.AES.decrypt( this.encryptcode,  this.name.trim() ).toString(cryptojs.enc.Utf8);
  console.log("decrypted" + this.dycriptcode)
}

add(){
  const newform= { name : this.admin.get('name')?.value, code:this.admin.get('code')?.value, email: this.admin.get('email')?.value}
  this.service.addadmin(newform).subscribe(data => {
    this.adminsjson()
    this.inputname.nativeElement.value=''
    this.inputcode.nativeElement.value=''
    this.inputemail.nativeElement.value=''
    this.router.navigateByUrl('/homescreen')
  })
 
}

edit(data:any){
  this.button=false
this.updateableadmin = data
this.admin.controls['name'].setValue(data.name)
this.admin.controls['code'].setValue(data.code)
this.admin.controls['email'].setValue(data.email)

}

update(){
  this.button=true
  this.inputname.nativeElement.value=''
    this.inputcode.nativeElement.value=''
    this.inputemail.nativeElement.value=''
const newform= {name : this.admin.get('name')?.value, code:this.admin.get('code')?.value, email: this.admin.get('email')?.value}

this.service.updateadmin(newform, this.updateableadmin.id).subscribe(data => {
  console.log('hhh');
  this.adminsjson()
  console.log(this.updateableadmin.id)
  
})
}

adminsjson(){
  this.service.getadmins().subscribe(data => {
    this.admins = data
  })
}



deleteadmin(id:any){
  this.service.deleteadmin(id.id).subscribe(data =>  this.adminsjson())
}
}
