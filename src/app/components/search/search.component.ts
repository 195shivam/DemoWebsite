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
  constructor(private data: DataService, private search: SearchService) {}
  @ViewChild('searchBar') searchBar: any;
  suggestionArray: any;
  ngAfterViewInit(): void {
    this.search.searchBar=this.searchBar.nativeElement
    fromEvent(this.searchBar.nativeElement, 'input').pipe(
      debounceTime(300)
    ).subscribe({
      next:v=>this.search.searchKeyword=this.searchBar.nativeElement.value
    })
  }
}
