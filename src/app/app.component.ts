import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoWebsite';
  constructor(public category: CategoryService) {}
  removeEvoucher(){
    this.category.eVoucher.checked=false

  }
  removeProduct(){
    this.category.product.checked=false;
  }
  removeEvergreen(){
    this.category.evergreen.checked=false;
  }
  removeFashion(){
    this.category.fashion.checked=false
  }

}
