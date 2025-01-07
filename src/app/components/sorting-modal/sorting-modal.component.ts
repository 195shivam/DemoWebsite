import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-sorting-modal',
  templateUrl: './sorting-modal.component.html',
  styleUrls: ['./sorting-modal.component.css'],
})
export class SortingModalComponent {
  @Output() sortOrder: EventEmitter<number> = new EventEmitter();
  @Output() updateShowModal: EventEmitter<boolean> = new EventEmitter();
  constructor(public sortingService: SortingService) {}
  c=0;
  @Input() showModal!:boolean
  handleReset() {
    this.c=0;
    this.sortOrder.emit(this.c);
    this.showModal=false
    this.updateShowModal.emit(this.showModal)
  }
  applySort() {
    this.sortOrder.emit(this.c);
    this.showModal=false
    this.updateShowModal.emit(this.showModal)
  }

  handleSort($event: any) {
    const sortOrder=$event.target.innerText;
    switch(sortOrder){
      case 'AtoZ':
        this.c=1;
        break;
      case 'ZtoA':
        this.c=2;
        break;
    }
  }

}
