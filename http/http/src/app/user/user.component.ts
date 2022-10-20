import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
users:any
  constructor(private user:ServiceService) { }

  ngOnInit(): void {
    this.user.getusers().subscribe(data =>{
      
      this.users =data
    })
  }

}
