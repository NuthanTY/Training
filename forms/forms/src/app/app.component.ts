import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Kannada','English','Hindi']

  userModel = new User('Aisiri', 'aisiriraj9@gmail.com','','morning')
  
  onSubmit(){
    console.log(this.userModel)
  }
}
