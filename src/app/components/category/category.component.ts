import { Component, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(public category: CategoryService , public sorting:SortingService) {}
  @ViewChild('eVoucher') eVoucher:any
  @ViewChild('product') product:any
  @ViewChild('evergreen') evergreen:any
  @ViewChild('fashion') fashion:any
  handleEvoucherChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.sorting.doSortAtoZ=false;
    this.sorting.doSortZtoA=false;
  }
  handleProductChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.sorting.doSortAtoZ=false;
    this.sorting.doSortZtoA=false;
  }
  handleEvergereenChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.sorting.doSortAtoZ=false;
    this.sorting.doSortZtoA=false;

  }
  handleFashionChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.sorting.doSortAtoZ=false;
    this.sorting.doSortZtoA=false;
  }
  ngAfterViewInit(){
    this.category.eVoucher=this.eVoucher.nativeElement as HTMLInputElement
    this.category.evergreen=this.evergreen.nativeElement as HTMLInputElement
    this.category.fashion=this.fashion.nativeElement as HTMLInputElement
    this.category.product=this.product.nativeElement as HTMLInputElement
  }


}
