import { Component, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(public category: CategoryService) {}
  @ViewChild('eVoucher') eVoucher:any
  @ViewChild('product') product:any
  @ViewChild('evergreen') evergreen:any
  @ViewChild('fashion') fashion:any
  handleEvoucherChange($event: Event) {
    const check = $event.target as HTMLInputElement;
  }
  handleProductChange($event: Event) {
    const check = $event.target as HTMLInputElement;
  }
  handleEvergereenChange($event: Event) {
    const check = $event.target as HTMLInputElement;

  }
  handleFashionChange($event: Event) {
    const check = $event.target as HTMLInputElement;
  }
  ngAfterViewInit(){
    this.category.eVoucher=this.eVoucher.nativeElement as HTMLInputElement
    this.category.evergreen=this.evergreen.nativeElement as HTMLInputElement
    this.category.fashion=this.fashion.nativeElement as HTMLInputElement
    this.category.product=this.product.nativeElement as HTMLInputElement
  }


}
