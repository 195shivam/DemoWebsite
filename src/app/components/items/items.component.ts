import { Component } from '@angular/core';
import { filter, toArray } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  handleModal() {
    this.showModal = !this.showModal;
  }
  showModal = false;
  constructor(public data: DataService, public category: CategoryService) {
    console.log(data.product);
  }
  filteredProduct: any = [];
  ngDoCheck() {
    this.data.dataObs.pipe(toArray()).subscribe({
      next: (v) => (this.filteredProduct = v),
    });
  }
}
