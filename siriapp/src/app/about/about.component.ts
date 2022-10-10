import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 public persons =[
  {"id":1 , "name":"Aisiri Raj", "Address": "VidyaNagar", "work":"Benz", },
  {"id":2, "name":"Nuthan TY", "Address": "Vijayanagara Badavane", "work":"Robosoft"}
 ]
  constructor(private router: Router, private route: ActivatedRoute,) { }
 public namee: any;
 public selecId: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id = (params.get('id'));
      this.selecId =id;
      });
    this.route.queryParams.subscribe(params =>{
      this.namee = params['name'];
    })
  }

  onSelect(person: any){
    // this.router.navigate(['/about', person.id];
    debugger;
    this.router.navigate([person.id],{relativeTo:this.route, queryParams : {address: 'VidyaNagar'}} )
    
    
  }
  isSelected(person: any){
 return ( person.id === this.selecId);
  }
  
}


