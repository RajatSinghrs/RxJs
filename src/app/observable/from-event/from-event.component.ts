import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild ('addBtn') addBtn: ElementRef;
  constructor(private design : DesignUtilityService) { }

  ngOnInit():void {
    /*Whenever we are using view Child in which we are taking access from Dom elements,
    so we use ngAfterViewInit life cycle as after our page renders then the button gets
     rendered and comes on our Dom then the code below will executed and we will get access for it. 

    // fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
    //   console.log(res)
    // })
    */
  }
  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let countVal = 'Video ' + count++
      console.log(countVal);
      this.design.print(countVal,'elemContainer');
      this.design.print(countVal,'elemContainer2');
     })
  }

}
