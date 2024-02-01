import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr=[
    {id:'1', name:'Rajat',gender:'Male'},
    {id:'2', name:'Aditi',gender:'Female'},
    {id:'3', name:'Ansh',gender:'Male'},
    {id:'4', name:'Singh',gender:'Male'},
    {id:'5', name:'Siya',gender:'Female'},
    {id:'6', name:'Ram',gender:'Male'},
    {id:'7', name:'Shrey',gender:'Male'},
    {id:'8', name:'Shreya',gender:'Female'},
    {id:'9', name:'Pri',gender:'Female'},
    {id:'10', name:'Shivang',gender:'Male'},
    {id:'11', name:'Sristi',gender:'Female'},
    {id:'12', name:'Alex',gender:'Male'},
  ]
  data;
  data2;
  data3;

  constructor() { }

  ngOnInit() :void{
    const source = from(this.dataArr)

    //EXP - 01 (Filter by length)
    source.pipe(filter(member=>member.name.length>4),toArray())
    .subscribe(res=>{
      console.log(res)
      this.data = res;
    })

    //EXP - 02(Filter by gender)
    source.pipe(filter(member=>member.gender==='Male'),toArray())
    .subscribe(res=>{
      console.log(res)
      this.data2 = res;
    })

    //EXP - 03(Filter by n'th Item)
    source.pipe(
      filter(member=> Number(member.id) <= 7 ),
      toArray())
    .subscribe(res=>{
      console.log(res)
      this.data3 = res;
    })


  }

}
