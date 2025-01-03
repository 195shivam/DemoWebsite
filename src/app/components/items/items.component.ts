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
  constructor(public data: DataService, public category: CategoryService , private search:SearchService , public sorting:SortingService)  {
    // console.log(data.product);
  }

  showModal = false;
  doApply=false;
  tempArr:any=[]
  filteredProduct: any = [];
  sortZtoA() {
    this.doApply=false
    if(this.sorting.doSortZtoA){
      this.sorting.doSortZtoA=true;
    }
    else if(this.sorting.doSortAtoZ ){
      this.sorting.doSortAtoZ =false;
      this.sorting.doSortZtoA=true;
    }
    else{
      this.sorting.doSortZtoA=!this.sorting.doSortZtoA
    }
  }
  sortAtoZ() {
    this.doApply=false
    if(this.sorting.doSortAtoZ ){
      this.sorting.doSortAtoZ =true;
    }
    else if(this.sorting.doSortZtoA){
      this.sorting.doSortAtoZ =true;
      this.sorting.doSortZtoA=false;
    }
    else{
      this.sorting.doSortAtoZ =!this.sorting.doSortAtoZ
    }
  }
  handleReset() {
    this.sorting.doSortAtoZ =false;
    this.sorting.doSortZtoA=false;
    this.category.eVoucher.checked=false
    this.category.evergreen.checked=false
    this.category.product.checked=false
    this.category.fashion.checked=false
    this.showModal=false
    this.tempArr=[]

  }
  handleModal() {
    this.showModal = !this.showModal;
    // console.log(45)
  }
  closeModal(){
    this.showModal=false;
    // console.log(55)
  }
  applySort(){
    // this.doApply=true
    this.showModal=false
    this.doApply=true
    if(this.sorting.doSortAtoZ && this.doApply){
      this.tempArr=this.filteredProduct.sort((a:any, b:any) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });

    }
    else if(this.sorting.doSortZtoA&& this.doApply){
      this.tempArr=this.filteredProduct.sort((a:any, b:any) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      this.tempArr=this.tempArr.reverse()

    }
    this.doApply=false;
    console.log(this.tempArr)
  }


  ngDoCheck() {

    this.data.dataObs.pipe(
      filter((v) => {
        if (
          !(
            this.category.eVoucher.checked ||
            this.category.evergreen.checked ||
            this.category.fashion.checked ||
            this.category.product.checked
          )
        )
          return true;
        else if (this.category.eVoucher.checked && v.category === 'e-voucher' && this.data.suggestionProduct.includes(v)){
          console.log(this.data.suggestionProduct.includes(v))
          return true;
        }

        else if (this.category.evergreen.checked && v.category === 'evergreen')
          return true;
        else if (this.category.fashion.checked && v.category === 'fashion & retail')
          return true;
        else if (this.category.product.checked && v.category === 'product') return true;
        else return false;
      }),
      toArray()).subscribe({
      next: (v) => {this.filteredProduct = v
        this.data.suggestionProduct=this.filteredProduct
      },
    });


    if(this.search.searchedArr.length>0){

      this.filteredProduct=this.search.searchedArr
      this.search.searchedArr=[]
    }
    if(this.filteredProduct.length === this.tempArr.length){
      this.filteredProduct=this.tempArr
    }

  }

}
