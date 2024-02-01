import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollToElement]'
})
export class ScrollToElementDirective implements OnInit{

//IGONORE This .ts file -not used anywhere

  @Input('appScrollToElement') scrollKey: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    const savedScrollPosition = this.getSavedScrollPosition();
    this.renderer.setProperty(this.el.nativeElement, 'scrollTop', savedScrollPosition);
  }
  private getSavedScrollPosition( ): number {
    return 0; // Implement logic to get the saved scroll position from ScrollService
  }

}
