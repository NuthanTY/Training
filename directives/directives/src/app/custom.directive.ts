import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private e:ElementRef) { 
    e.nativeElement.style.color ='red';
  }

}
