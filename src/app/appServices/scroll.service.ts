import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  //Ignore the service , its not used anywhere 

  constructor() { } 

  private scrollPositions: { [key: string]: number } = {};

  setScrollPosition(key: string, position: number): void {
    this.scrollPositions[key] = position;
  }
  getScrollPosition(key: string): number {
    return this.scrollPositions[key] || 0;
  }
}
