import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaustmap',
  templateUrl: './exhaustmap.component.html',
  styleUrls: ['./exhaustmap.component.scss']
})
export class ExhaustmapComponent implements OnInit , AfterViewInit {

  constructor() { }
  num = 0;
  //now we are working on btn DOM element , so we will work in ngAfterViewInit
  @ViewChild('btn') btn:ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click')
    .subscribe(res=>{
      console.log(res);
    })
  }
}
