import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  // userName:string = 'Rajat';//Example of subject 
  userName:string; //Example of behaviour subject in which the value is set in the service itself

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
