import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/datepicker';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { ConsoleReporter } from 'jasmine';
import { Router } from '@angular/router';

const API_KEY = environment.API_KEY
const API_URL = environment.API_URL
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weather: any;
  formdata:any;
  display=false;
  homee=true;
  ham=false;
  trr=true;
  active = "active";
  backk:any;
  on=false;
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) { }
  @ViewChild('filterName ') inputname:any;
  ngOnInit(): void {
    this.backk = localStorage.getItem('ham');
    this.backk = JSON.parse(this.backk);
    if(this.backk === true){
      this.trr = true;
    }
    console.log(this.backk)


    // this.trr=false;

  }
  search = this.fb.group({
    name: ['']
  })
  find() {
    this.inputname.nativeElement.value=''
    let name = this.search.get('name')?.value;
    localStorage.setItem('city', JSON.stringify(this.search.get('name')?.value));
    this.http.get(`${API_URL}/weather?q=${name}&appid=${API_KEY}`).subscribe(data => {
      
      console.log(data)
    //   this.weather = data;
    this.formdata = localStorage.getItem('formdata')
    // console.log(this.formdata)
    this.formdata = JSON.parse(this.formdata) || [];
    this.formdata.unshift({data});
    console.log(this.formdata)
    localStorage.setItem('formdata', JSON.stringify(this.formdata));
    this.router.navigate(['main'])

    .then(() => {

      window.location.reload();

    });
    // window.location.reload();
    },err=>{
      alert("city not found")
    })
    // this.router.navigate(['main'])
    
   


  }

displayy() {
// this.display=true
// this.homee=false
this.ham =false;
this.trr=false;
this.on=false;
}
home(){
  // this.display=false;
  // this.homee=true;
  this.ham =false;
  this.trr=true;
  this.on=false;
}
hemicon(){
  this.ham =true;
}
rec(){
  this.ham =false;
  this.trr=false;
  this.on=false;
}
back(){
  this.ham=false;
}
onning(){
  this.on=true
  this.ham =false;
  this.trr=false;
}
main(){
  this.on=false;
  this.trr=true;

}
recc(){
  this.on=false;
}
  currentDate = new Date();
}
