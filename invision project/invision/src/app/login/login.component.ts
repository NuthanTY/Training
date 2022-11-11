import { Component, OnInit } from '@angular/core';
import { InvisionService } from '../invision.service';
import { FormBuilder, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  name: any;
  constructor(private invion: InvisionService, private form: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.invion.getusers().subscribe(data => {
      this.users = data;


    })



  }

  login = this.form.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })


  loginn= false;

  addlocal() {
    localStorage.setItem('name',JSON.stringify(this.login.get('name')?.value));
    localStorage.setItem('password',JSON.stringify(this.login.get('password')?.value));

    this.invion.getusers().subscribe(data => {
    

      for (let i = 0; i < data.length; i++) {

        if (this.login.get('name')?.value === data[i].name && this.login.get('password')?.value === data[i].password) {



          this.loginn = true

          break;
        }
      }
        if (this.loginn) {

          this.router.navigateByUrl('/homescreen');

        }
        else {
          alert("User name and password not matching")
        }
      
    })
  


    // localStorage.setItem(a,b)
    // sessionStorage.setItem(a,b)


  }


}
