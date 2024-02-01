import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, concatMap, delay, map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrls: ['./concatmap.component.scss']
})
export class ConcatmapComponent implements OnInit {

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
    concatAll())
    .subscribe(res => {
      this.design.print(res, 'elemContainer2')
    })
    
    //Exp - 03 | concatMap
    source.pipe(concatMap(res => this.getData(res)))
    .subscribe(res => {
      this.design.print(res, 'elemContainer3')
    })
    

  }

}
