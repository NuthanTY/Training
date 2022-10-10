import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  public place:any;
  constructor(private route: ActivatedRoute, private Router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.place = params['address'];
    })
    // this.route.paramMap.subscribe((params: ParamMap)=> {
    //   let Address = (params.get('Address'));
    //  this.place= Address;
      
  


}
}
