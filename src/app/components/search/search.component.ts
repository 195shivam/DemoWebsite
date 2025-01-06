import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, filter, map, toArray } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { DataService } from 'src/app/services/data.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
whenClickedOutside() {
this.search.searchBar.nativeElement.value=''
}
  constructor(private data: DataService , private search:SearchService) {}
  @ViewChild('searchBar') searchBar: any;
  suggestionArray:any;
  ngAfterViewInit(): void {
    this.search.searchBar=this.searchBar
    this.suggestionArray=fromEvent(this.searchBar.nativeElement, 'input')

  }
  ngDoCheck(){

    if(!(this.suggestionArray===undefined)){
      this.suggestionArray.subscribe({
        next:()=>from(this.data.suggestionProduct).pipe(
          filter((v:any)=>
          {
            const searchValue = this.searchBar.nativeElement.value.toLowerCase();

            if (searchValue.length === 0) {
              return true;
            } else if (v.name.toLowerCase().includes(searchValue)) {
              return true;
            }
            return false
          }
          ),


          toArray()
        ).subscribe({
          next:(d:any)=>{this.search.searchedArr=d
            this.data.suggestionProduct=d
          }
        })
      });
    }
    // console.log(this.data.suggestionProduct,'search')

  }
}
