import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName:string = 'Rajat';

  constructor(private design : DesignUtilityService) { 
}
  ngOnInit() :void {
    this.design.exclusive.next(true);
    this.design.userName.subscribe(res=>{
      this.userName=res;
    })
  }
  ngOnDestroy(): void {
    this.design.exclusive.next(false);
    
  }

}
