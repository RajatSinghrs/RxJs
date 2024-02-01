import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  //Instead of making replayService in .ts file we are using it globally as a service
  constructor(private design : DesignUtilityService) { }

  //List Data
  user1List = ['Angular 1','Angular 2'];
  user2List = [];
  user3List = [];

  //Subscribe modes
  subscribeMode2 : boolean= false;
  subscribeMode3: boolean= false;

  //Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  //Toggle Properties
  methodInterval:boolean = false;
  intervalSubs:Subscription;

  ngOnInit() : void{
    this.design.videoEmit.subscribe(res=>{
      console.log(res)
      this.user1List.push(res)
    })
  }

  //Video add Method
  onVideoAdd(video){
    // console.log(video);
    this.design.videoEmit.next(video)
  }

  //User 2 subscribe button
  user2Subscribe(){
    if(this.subscribeMode2){
      this.subscription2.unsubscribe()
    }else{
      this.subscription2= this.design.videoEmit.subscribe(res=>{
        this.user2List.push(res)
      })
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }

  //User 3 subscribe button
  user3Subscribe(){
    if(this.subscribeMode3){
      this.subscription3.unsubscribe()
    }else{
      this.subscription3= this.design.videoEmit.subscribe(res=>{
        this.user3List.push(res)
      })
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  //Toggle Method 
  toggleMethod(){
    const broadCastVideo = interval(1000);
    if(!this.methodInterval){
      this.intervalSubs = broadCastVideo.subscribe(res=>{
        this.design.videoEmit.next('video' + res)
        })
   } else{
     this.intervalSubs.unsubscribe();
    } 
    this.methodInterval= !this.methodInterval;
  }
}
