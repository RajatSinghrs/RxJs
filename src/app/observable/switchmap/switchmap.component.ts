import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor(private design : DesignUtilityService) { }
  getData(data){ 
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

  ngOnInit() {
    const source = from(['Tech', 'Coding' , 'News' , 'Comedy' ])

    //Exp - 01 | Map
    source.pipe(map(res => this.getData(res)))
    .subscribe(res => res.subscribe(res2=>{
      this.design.print(res2, 'elemContainer')
    }))
    
    //Exp - 03 | Map + concatAll
    source.pipe(map(res => this.getData(res)),
    switchAll())
    .subscribe(res => {
      this.design.print(res, 'elemContainer2')
    })
    
    //Exp - 03 | concatMap
    source.pipe(switchMap(res => this.getData(res)))
    .subscribe(res => {
      this.design.print(res, 'elemContainer3')
    })

  }

}
