import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoWebsite';
  constructor(public category: CategoryService, private search:SearchService) {}
  removeEvoucher(){
    this.category.eVoucher.checked=false
    this.search.searchBar.nativeElement.value=''

  }
  removeProduct(){
    this.category.product.checked=false;
    this.search.searchBar.nativeElement.value=''
  }
  removeEvergreen(){
    this.category.evergreen.checked=false;
    this.search.searchBar.nativeElement.value=''
  }
  removeFashion(){
    this.category.fashion.checked=false
    this.search.searchBar.nativeElement.value=''
  }

}
