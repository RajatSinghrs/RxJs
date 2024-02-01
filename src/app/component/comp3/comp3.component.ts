import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  // userName:string = 'Ansh';
  userName:string;

  constructor(private design :DesignUtilityService) { }

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
