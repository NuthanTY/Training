import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  toDisplay = true;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
 
  loginfunction(){
    
    if(this.login.invalid){
      alert("Fill all the required Field")
    }
    else{
      alert("Account Created")
    }
    
  }
  get phones(){
    return this.login.get('phones') as FormArray;
  }
  add(){
    this.phones.push(this.fb.control(''));
    this.toDisplay = !this.toDisplay;

  }
  login = this.fb.group({
    name:['',[Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required]],
    phones:this.fb.array(['']),
    age:['',[Validators.required,Validators.min(18),Validators.max(80),Validators.minLength(2)]],
    gender:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      code:[''],
    })

  })
  
}
