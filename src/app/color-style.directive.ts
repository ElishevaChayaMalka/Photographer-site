import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorStyle]'
})
export class ColorStyleDirective {
  @Input() color: string = "red"


  constructor(public el: ElementRef) {
  }
  private ColorStyleDirective(c:string) {
    this.el.nativeElement.style.backgroundColor = c;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.ColorStyleDirective(this.color);
  }
   
  @HostListener('mouseleave') onMouseLeave() {
    this.ColorStyleDirective("white");
  }




}
