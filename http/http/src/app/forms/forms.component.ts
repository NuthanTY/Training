import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private user:ServiceService) { }

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

  submit(formvalue:NgForm){
    console.log(formvalue.value)

    const postbody={
      title: formvalue.value.name,
      body: formvalue.value.email,
      
    }
    this.user.add(postbody).subscribe(daa =>{
      console.log(daa)
    })
  
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
