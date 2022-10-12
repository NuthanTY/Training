import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
  }
  title = 'reactive-forms';
  registration = this.form.group({
    
    email:['', [Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(1)]],
    confirmpassword:['',[Validators.required,Validators.minLength(1)]]
    

  })
check(){
  
  let password = (this.registration.get('password')?.value);
  let confirm = (this.registration.get('confirmpassword')?.value);
  if(password !== confirm){
    alert("Confirm password doesnt match with password")
    
  }
  else if(this.registration.invalid)
  {
    alert("Please fill all the above form")
  }
  else{
    alert("Login sucesfull")
    location.reload();
  }
}
  
}
