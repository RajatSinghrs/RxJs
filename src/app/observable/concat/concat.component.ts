import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(private design : DesignUtilityService) { }

  ngOnInit() {

    const sourceCoding = interval(1000).
    pipe(map(res=>'Coding Video # ' + (res+1)),
      take(5));

    const sourceTech = interval(1000).
    pipe(map(res=>'Tech Video # ' + (res+1)),
      take(3));

    const sourceNews = interval(1000).
    pipe(map(res=>'News Video # ' + (res+1)),
      take(4));

      const FinalObser = concat(sourceCoding,sourceTech,sourceNews)

      FinalObser.subscribe(res=>{
      console.log(res);
      this.design.print(res,'elemContainer');
    })

  }

}
