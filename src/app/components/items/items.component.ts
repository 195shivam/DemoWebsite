import { Component } from '@angular/core';
import { filter, toArray } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';
import { DataService } from 'src/app/services/data.service';
import { SearchComponent } from '../search/search.component';
import { SearchService } from 'src/app/services/search.service';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  constructor(
    public data: DataService,
    public category: CategoryService,
    public search: SearchService,
    public sorting: SortingService
  ) {

  }
  c = 0;
  showModal = false;
  doApply = false;
  searchKeyword=''
  tempArr: any = [];
  filteredProduct: any = [];
  updateShowModal(showModal: boolean) {
    this.showModal = showModal;
  }

  setOrder(order: number) {
    this.c = order;
  }

  handleError($event: any) {
    $event.target.src = '../../../assets/images/placeholder.png';
  }

  handleModal() {
    this.showModal = !this.showModal;
  }
  closeSortingModal() {
    this.showModal = false;
  }

  ngOnInit() {
    this.data.dataObs.pipe(toArray()).subscribe({
      next: (v) => {
        this.filteredProduct = v;
        this.data.suggestionProduct = this.filteredProduct;
      },
    });
  }
  ngOnChanges(){
    console.log('OnChanges')
  }
}
