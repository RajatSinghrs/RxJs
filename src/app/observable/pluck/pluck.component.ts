import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }

  users= [
    {name:'Rajat', skills:'Angular',job:{title:'front-end Developer',exp:'1 year'}},
    {name:'Singh', skills:'TypeScript',job:{title:'Front-end Developer',exp:'3 year'}},
    {name:'Ansh', skills:'Java',job:{title:'Back-end Developer',exp:'12 year'}},
    {name:'Alex', skills:'Rxjs',job:{title:'Web Developer',exp:'6 year'}},
    {name:'Ram', skills:'SQL',job:{title:'Db Developer',exp:'4 year'}},
  ]

  data; 
  data2; 
  ngOnInit():void {

    //Exp - 01
    //We cannot iterate the stream of data so we use toArray operator
    from(this.users).pipe(
      // map(data => data.name),
      pluck('name'),
      toArray())
    .subscribe(res=>{
      console.log(res);
      this.data =res;
    })

    //Exp - 02
    from(this.users).pipe(
      pluck('job','title'),
      toArray())
    .subscribe(res=>{
      console.log(res);
      this.data2 =res;
    })
  }

}
