import { Component, OnInit } from '@angular/core';
import { memoryUsage } from 'process';
import { Subscription, from, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  //subscription properties
  subs1: Subscription;
  subs2: Subscription;

  //message's properties
  msg1 ;
  msg2 ;
  constructor( private design : DesignUtilityService) { }

  ngOnInit() {
    const brodcastData = interval(1000);

    //EX-01
    // this.subs1 = brodcastData.subscribe(res=>{
    this.subs1 = brodcastData.pipe(
      map(data=> 'Data ' +data)
      )
    .subscribe(res=>{
      // console.log('Data'+res)
      // console.log(res)
      this.msg1 =res
    })
    setTimeout(()=>{
      this.subs1.unsubscribe()
    },10000)

    //Ex - 02
    this.subs2 = brodcastData.pipe(
      map(data => data * 3 ))
    .subscribe(res =>{
      // console.log(res)
      this.msg2 =res;
    })
    setTimeout(()=>{
      this.subs2.unsubscribe()
    },10000)


    //EX - 03
    const members=from([
      { id:1, name:'Rajat'},
      { id:2, name:'Ansh'},
      { id:3, name:'Singh'},
      { id:4, name:'Ani'},
      { id:5, name:'Honey'},
      { id:6, name:'Ash'},
      { id:7, name:'Ram'},
      { id:8, name:'Raj'},
  ]);
  members.pipe(map(data =>data.name))
  .subscribe(res=>{
    console.log(res)
    this.design.print(res,'elemContainer')
  },)

  }

}
