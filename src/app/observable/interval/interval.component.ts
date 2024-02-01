import { Component, OnInit } from '@angular/core';
import { container } from '@angular/core/src/render3';
import { start } from 'repl';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  showMsg:any;
  dataSubscription:Subscription;
  intervalRun:boolean =true;

  timer: any;
  timerSubscription: Subscription;
  timerRun: boolean = true;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.startInterval();
    this.startTimer();
  }
    startInterval(){
      const brodcastData = interval(1000);
    this.dataSubscription = brodcastData.subscribe(res=>{
    console.log(res);
    this.showMsg='Data'+res;
    this.designUtility.print(this.showMsg,'elemContainer')
   });
  }
  stopInterval(){
    this.dataSubscription.unsubscribe();
    this.intervalRun= false;
  } 
  resetData(){
    this.showMsg='';
    this.startInterval();
    this.intervalRun=true;
  }

  startTimer(){
    const timerData = timer(5000,  1000);
    this.timerSubscription = timerData.subscribe(res => {
      this.timer = 'Data'+res;
      this.designUtility.print(this.timer,'elemContainer2')
    });
  }
  stopTimer(){
    this.timerSubscription.unsubscribe();
    this.timerRun = false;
  }
  resetTimer() {
   this.timer ='';
   this.startTimer();
    this.timerRun = true;
  }
}
