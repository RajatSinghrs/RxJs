import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {


  users = [
    { name : 'Rajat' , skill : 'Angular' },
    { name : 'Ansh' , skill : 'React' },
    { name : 'Raj' , skill : 'HTML' },
    { name : 'Singh' , skill : 'Vue' }
  ]
  constructor() { }

  sourceSubs:any = Subscription;
  ngOnInit() {

    //EXP - 01
    const source = interval(1000);
    this.sourceSubs = source.pipe(take(5),toArray())
    .subscribe(res=>{
      //console.log(res)
    })

    //EXP - 02
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
     // console.log(res)
    })

    //EXP - 03
    const source3 = of('Rahul', 'Rajesh','Ram ','Riya');
    source3.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })
  }

}
