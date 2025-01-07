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
updateShowModal(showModal:boolean) {
this.showModal=showModal
console.log(showModal,this.showModal,'showModal')
}
setOrder(data:number) {
this.c=data
}
handleError($event: any) {
  $event.target.src='../../../assets/images/placeholder.png'
}
  constructor(public data: DataService, public category: CategoryService , private search:SearchService , public sorting:SortingService)  {
    // console.log(data.product);
  }
  c=0;
  showModal = false;
  doApply=false;
  tempArr:any=[]
  filteredProduct: any = [];

  handleModal() {
    this.showModal = !this.showModal;
  }
  closeSortingModal() {
    this.showModal=false
  }


  ngDoCheck() {
    console.log(this.showModal)
    this.data.dataObs.pipe(

      toArray()).subscribe({
      next: (v) => {this.filteredProduct = v
        this.data.suggestionProduct=this.filteredProduct
      },
    });

    if(this.search.searchBar!=undefined && (this.search.searchedArr.length>0 || this.search.searchBar.nativeElement.value.length>0)){

      this.filteredProduct=this.search.searchedArr
      this.search.searchedArr=[]
    }
    if(this.filteredProduct.length === this.tempArr.length){
      this.filteredProduct=this.tempArr
    }

  }

}
