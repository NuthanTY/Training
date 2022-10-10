import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  registration = new FormGroup({
    name: new FormControl('siri'),
    password: new FormControl(''),
    confirmpasword: new FormControl(''),
  });
}
