import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  constructor(private design : DesignUtilityService) { }

  asyncVideoEmitter;

  ngOnInit() :void{
    this.design.asyncVideoEmit.subscribe(res=>{
      this.asyncVideoEmitter = res;
    })
  }

  //Video Add Method 
  onVideoAdd(video){
    console.log(video);
    this.design.asyncVideoEmit.next(video)
  }

  //On complete Method
  onComplete(){
    this.design.asyncVideoEmit.complete();
  }
}
