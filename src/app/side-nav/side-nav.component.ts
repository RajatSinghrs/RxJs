import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus :boolean =false;
  list =[
    {
      number: '1',
      name: 'home',
    },{
      number: '2',
      name: 'Analytics',
    },
    {
      number: '3',
      name: 'Products',
    },{
      number: '4',
      name: 'Order',
    },
    {
      number: '5',
      name: 'Settings',
    },{
      number: '6',
      name: 'About',
    },
    {
      number: '7',
      name: 'Contact',
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
