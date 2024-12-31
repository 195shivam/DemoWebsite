import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appModal]',
})
export class ModalDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private el: ElementRef) { }


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {

    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit();
    }
  }
}
