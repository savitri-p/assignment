import { 
  Directive,
  Renderer2,
  ElementRef,
  Input,
  HostListener,  
   } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {
  @Input('appHoverClass') hoverClass: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, this.hoverClass);
    //this.renderer.setElementClass(this.elfRef, this.hoverClass, true);
    //this.elRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    //this.renderer.setElementClass(this.elfRef, this.hoverClass, true);
    this.renderer.removeClass(this.elRef.nativeElement, this.hoverClass);
  }

}