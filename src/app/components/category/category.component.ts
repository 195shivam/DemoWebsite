import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(public category: CategoryService) {}
  handleEvoucherChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.category.eVoucher = check.checked;
    console.log(check.checked);
  }
  handleProductChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.category.product = check.checked;
    console.log(check.checked);
  }
  handleEvergereenChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.category.evergreen = check.checked;
    console.log(check.checked);
  }
  handleFashionChange($event: Event) {
    const check = $event.target as HTMLInputElement;
    this.category.fashion = check.checked;
    console.log(check.checked);
  }
}
