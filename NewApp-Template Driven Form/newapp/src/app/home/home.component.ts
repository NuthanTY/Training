import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  movieErrors = true;

  validate(value:any){
    if(value=== 'default'){
      this.movieErrors=true;
    }
    else{
      this.movieErrors=false;
    }


  }

  submit(){
  
   alert("Ticket booked sucessfully");
  
 
  }
  
  reset(){
    
    this.usermodel.email
    this.usermodel.mobile;
  this.usermodel.movie;
  this.usermodel.name;
  this.usermodel.time;
  }

  public movies = ['Kanthara','KGF','Kranthi','Vikranth Rona','Paramathma']

  usermodel = new User("Aisiri",'aisiriraj9@gmail.com',1234567890,'default','morning')
}
