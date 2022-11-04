
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InvisionService } from '../invision.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  name: any;
  constructor(private form: FormBuilder, private service: InvisionService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  newpass = this.form.group({
    password: ['', [Validators.required]],
    newpassword: ['', [Validators.required]]
  })

  update() {
    this.name = localStorage.getItem('name');
    console.log(this.name);
    this.name = JSON.parse(this.name);
    console.log(this.name)
    if (this.newpass.get('password')?.value === null || this.newpass.get('newpassword')?.value === null) {
      alert('Please Enter the new password')
    }

    else if (this.newpass.get('password')?.value !== this.newpass.get('newpassword')?.value) {
      alert('Passwords are not same')
    }

    else {


      this.service.getusers().subscribe(data => {
      
        for (let d of data) {

          if (this.name === d.name) {
            const newform = { password: this.newpass.get('password')?.value, name: d.name }

            this.service.update(newform, d.id).subscribe(data => {
              this.router.navigateByUrl('/homescreen')
            })
          }
        }

      })


    }
  }

}
