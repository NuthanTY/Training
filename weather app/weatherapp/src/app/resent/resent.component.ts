import { A11yModule } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resent',
  templateUrl: './resent.component.html',
  styleUrls: ['./resent.component.css']
})
export class ResentComponent implements OnInit {
found:any;
table:any;
temp:any;
color=''
searchs:any;
colorplace=''
favrts:any;
filled=false;
notfilled=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchs= localStorage.getItem('formdata');
    this.searchs=JSON.parse(this.searchs)
    this.favrts = localStorage.getItem('favdata');
    this.favrts = JSON.parse(this.favrts);
    // for(let search of this.searchs){
    //   for(let fav of this.favrts){
    //     if(search.data.name == fav.name){
    //       this.filled = true;
    //       this.notfilled=false;
         
    //     }
       
    //   }
    // }
  

    if(this.searchs === null){
      this.found=true;
      this.table=false;
    }
    else{
      this.found=false;
      this.table=true;
    }


    

  }
  td(){
    this.color="color"
    this.colorplace="colorplace"
  }
  clear(){
    localStorage.removeItem('formdata');
    this.found=true;
    this.table=false;
   
    // console.log((this.searchs).length)
  }
  removethis(data:any){
    let temp = this.searchs.filter((items:any) =>  items.name != data.name);
    console.log(temp)
    localStorage.setItem('formdata',JSON.stringify(temp));
    window.location.reload()
    
  
  
  }
  check(data:any){
    if(this.favrts){
      for(let fav of this.favrts ){
        if(fav['name'] == data){
          this.filled = true;
              this.notfilled=false;
              break;
        }
        else{
          this.filled = false;
              this.notfilled=true;
        }
      }
    }
      
  }
  back(){
    localStorage.setItem('ham','true');
    this.router.navigate(['main'])
    .then(() => {
      window.location.reload()
    })
  }

  
}


