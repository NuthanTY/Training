import { Directive,ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') mouseover(){
    this.render.setStyle(this.element.nativeElement, 'width' ,'100%')
    this.render.setStyle(this.element.nativeElement, 'height' ,'70px')
  }
  @HostListener('mouseleave') mouseout(){
    this.render.setStyle(this.element.nativeElement, 'width' ,'90%')
    this.render.setStyle(this.element.nativeElement, 'height' ,'50px')
  }
}
