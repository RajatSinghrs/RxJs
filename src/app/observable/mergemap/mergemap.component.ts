import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private design : DesignUtilityService) { }

  getData(data){
    return of(data + ' Video Uploaded');
  }

  ngOnInit() {
    const source = from(['Tech', 'Coding' , 'News' , 'Comedy' ]);

    //Exp - 01 - Map
    source.pipe(
      map(res => this.getData(res)))

      /*.subscribe(res=>{
        this.design.print(res , 'elemContainer')
       })*/

       //We have to subcribe twice to get the observable's value 
    .subscribe(res=> res.subscribe(res2=>{
      // console.log(res2);
      this.design.print(res2 , 'elemContainer')
    }))

    //Exp - 02 : Map + Merge All
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    )
    .subscribe(res=>{
      // console.log(res);
      this.design.print(res , 'elemContainer2')
    })


    //Exp - 03 : Merge-map
    source.pipe(
      mergeMap(res => this.getData(res))
    )
    .subscribe(res=>{
       console.log(res);
      this.design.print(res , 'elemContainer3')
    })
  }

}
