import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean=false;
  exclusive :boolean =false;

  constructor(private design: DesignUtilityService) { }

  ngOnInit() {
    this.design.exclusive.subscribe(res=>{
        this.exclusive = res
    })
  }
  sideNavToggle() {
   this.menuStatus = !this.menuStatus;
   this.sideNavToggled.emit(this.menuStatus);
  }

}
