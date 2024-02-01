import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  myColor : string = '';
  constructor(private design: DesignUtilityService) { }

  ngOnInit(): void {

    const source = interval(1200);
    //EXP - 01
    
    const arr1 = ['Rajat', 'Singh', 'Ansh', 'Shubh', 'Kiki', 'Ash', 'Shiv'];
    let obsSubs: Subscription;

    obsSubs = source.pipe(
      tap(res => {
        // console.log('tap data before : '+res)
        if (res === 5) {
          obsSubs.unsubscribe();
        }
      }), map(res => arr1[res]
        //   if(res == 4){
        //     obsSubs.unsubscribe()
        // }
      ),
      tap(res => console.log('tap data after mapping : ' + res))
      //Now for instance we use other operators and we have to check if the data is the desired one,
      //-so we can use tap operator after it ,as used above with map operator
    )
      .subscribe(res => {
        this.design.print(res, 'elemContainer')
      })


    //EXP - 02
    const color = ['Red', 'Blue', 'Yellow', 'Violet', 'Grey', 'Black', 'Blueviolet'];
    let obsSubs2: Subscription;

    obsSubs2 = source.pipe(
      tap(res => {
        this.myColor = color[res];
        console.log('tap data before : ' + res)
        if (res == 7) {
          obsSubs2.unsubscribe();
        }
      }), map(res => color[res]
      ),
      tap(res => console.log('tap data after mapping : ' + res))
    )
      .subscribe(res => {
        this.design.print(res, 'elemContainer2')
      })


  }


}
