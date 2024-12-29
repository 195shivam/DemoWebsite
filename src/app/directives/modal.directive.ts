import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModal]',
})
export class ModalDirective {
  constructor(private el: ElementRef) {}
  @HostListener('click', ['event'])
  onClick() {
    console.log();
  }
}
