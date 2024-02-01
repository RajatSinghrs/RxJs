import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private design: DesignUtilityService) { }
  randomNames = ['Singh' , ' Rajat' , ' Ansh ' , 'Adit' , 'Vijay' ,'Brim' , 'Ram' , 'Shiv']
  ngOnInit():void {

    const nameSource =from(this.randomNames);

    //Exp - 01 | Take
    // const source= interval(1000).pipe(take(6));
    nameSource.pipe(take(5))
    .subscribe(res=>{
      // console.log(res)
      this.design.print(res,'elemContainer')
    })


    //Exp - 02 | TakeLast
    nameSource.pipe(takeLast(5))
    .subscribe(res=>{
      // console.log(res)
      this.design.print(res,'elemContainer2')
    })
   
   
    //Exp - 02 | TakeUntil
    const source= interval(1000);
    let condition1 = timer(5000);
    let condition2 = fromEvent(document,'click');
    source.pipe(
      map(res=>'Number ' + res),
      takeUntil(condition2)
    )
    .subscribe(res=>{
      console.log(res)
      this.design.print(res,'elemContainer3')
    })
    
  }

}
