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
  constructor(public data: DataService, public category: CategoryService) {
    // console.log(data.product);
  }
  doSortAtoZ = false;
  doSortZtoA = false;
  showModal = false;
  doApply=false;
  filteredProduct: any = [];
  sortZtoA() {
    this.doApply=false
    if(this.doSortZtoA){
      this.doSortZtoA=false;
    }
    else if(this.doSortAtoZ){
      this.doSortAtoZ=false;
      this.doSortZtoA=true;
    }
    else{
      this.doSortZtoA=!this.doSortZtoA
    }
  }
  sortAtoZ() {
    this.doApply=false
    if(this.doSortAtoZ){
      this.doSortAtoZ=false;
    }
    else if(this.doSortZtoA){
      this.doSortAtoZ=true;
      this.doSortZtoA=false;
    }
    else{
      this.doSortAtoZ=!this.doSortAtoZ
    }
  }
  handleReset() {
    this.doSortAtoZ=false;
    this.doSortZtoA=false;
    this.category.eVoucher.checked=false
    this.category.evergreen.checked=false
    this.category.product.checked=false
    this.category.fashion.checked=false
    this.showModal=false

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
    this.doApply=true
    this.showModal=false
  }
  ngOnInit(){

  }

  ngDoCheck() {
    this.data.dataObs.pipe(toArray()).subscribe({
      next: (v) => {this.filteredProduct = v

      },
    });
    // console.log(this.doSortAtoZ,this.doSortZtoA,this.doApply )
    if(this.doSortAtoZ && this.doApply){
      this.filteredProduct=this.filteredProduct.sort((a:any, b:any) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });

    }
    else if(this.doSortZtoA && this.doApply){
      this.filteredProduct=this.filteredProduct.sort((a:any, b:any) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      this.filteredProduct=this.filteredProduct.reverse()
      // console.log(this.filteredProduct)

    }
    // console.log(65)
    // console.log(this.filteredProduct)
  }
}
