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

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.elRef.nativeElement, this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elRef.nativeElement, this.hoverClass);
  }

}