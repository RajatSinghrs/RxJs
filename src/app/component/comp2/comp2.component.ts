import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  // userName:string ='Singh';
  userName:string;

  constructor(private design : DesignUtilityService) { }

  ngOnInit() :void{
    this.design.userName.subscribe(res=>{
      this.userName=res;
    })
  }

  onChange(uname){
    console.log(uname.value)
    this.design.userName.next(uname.value)
  }
}
