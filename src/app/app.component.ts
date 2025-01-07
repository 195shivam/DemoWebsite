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
  constructor(public category: CategoryService, private search:SearchService ) {}
  removeCategory(index:number){
    this.category.categories.splice(index,1)
  }

}
