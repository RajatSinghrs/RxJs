import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, mergeMap, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-mm-cm-smap',
  templateUrl: './mm-cm-smap.component.html',
  styleUrls: ['./mm-cm-smap.component.scss']
})
export class MmCmSmapComponent implements OnInit {

  constructor(private design: DesignUtilityService) { }
  getData(data){ 
    return of(data + ' Video Uploaded').pipe(delay(2000))
  }

  ngOnInit() {
    const source = from(['Tech', 'Coding' , 'News' , 'Comedy' ])

    //Exp - 01 | MergeMap
    source.pipe(mergeMap(res => this.getData(res)))
    .subscribe(res=>{
      //  console.log(res);
      this.design.print(res , 'elemContainer')
    })

    //Exp - 02 | concatMap
    source.pipe(concatMap(res => this.getData(res)))
    .subscribe(res => {
      this.design.print(res, 'elemContainer2')
    })

    //Exp - 03 | SwitchMap
    source.pipe(switchMap(res => this.getData(res)))
    .subscribe(res => {
      this.design.print(res, 'elemContainer3')
    })
  }

}
