import { findIndex } from 'rxjs';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SearchService } from 'src/app/services/search.service';
import { SortingService } from 'src/app/services/sorting.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(
    public category: CategoryService,
    public sorting: SortingService,
    private search: SearchService
  ) {}
  handleCategory($event: any) {
    if($event.target.type==='checkbox'){
      if($event.target.checked){
        const categoryData={
          categoryName:$event.target.name,
          categoryEl:$event.target
        }
        this.category.categories.push(categoryData)
      }
      else if(this.category.categories.find((obj:any)=>obj.categoryName===$event.target.name)){
        this.category.categories.splice(this.category.categories.findIndex((obj:any)=>obj.categoryName===$event.target.name),1)
      }
    }
  }
}
