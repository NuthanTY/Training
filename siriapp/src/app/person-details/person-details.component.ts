import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  public personId:any;
  constructor(private route: ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.personId= id;

    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.personId =id;
      
    })
  }
  goback(){
    let selecID= this.personId;
    // this.Router.navigate(['/about',{id:selecID}])
    this.Router.navigate(['../',{id: selecID}],{relativeTo:this.route})

  }

  place(){
    this.Router.navigate(['place'], {relativeTo:this.route,queryParams : {address: 'hfvbbv'}})
  }

  profile(){
    this.Router.navigate(['profile'],{relativeTo:this.route})
  }

}
