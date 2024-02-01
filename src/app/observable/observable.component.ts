import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit{
  private scrollKey = 'your-scroll-key';

  constructor() { }

  ngOnInit(): void {
    
  }
 
}
