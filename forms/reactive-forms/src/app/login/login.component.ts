import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  toDisplay = true;
  constructor(private fb: FormBuilder, public dialog:MatDialog ) { }

  ngOnInit(): void {
  }
  openDialog(){
    let dialogref=this.dialog.open(DialogExampleComponent);
    dialogref.afterClosed().subscribe(results => {
     
      if(results === 'true'){
        alert("Account Created");
        location.reload();
      }
    })
  }
  login = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    phones: this.fb.array(['']),
    age: ['', [Validators.required, Validators.min(18), Validators.max(80)]],
    gender: [''],
    dob: ['',Validators.required],
    address: this.fb.group({
      city: [''],
      state: [''],
      code: [''],
    })

  })

  loginfunction() {

    if (this.login.invalid) {
      alert("Fill all the required Field")
    }
    else {
      this.openDialog();
      
    
    }

  }
  get phones() {
    return this.login.get('phones') as FormArray;
  }

  add() {
    this.phones.push(this.fb.control(''));
    this.toDisplay = !this.toDisplay;

  }

}
