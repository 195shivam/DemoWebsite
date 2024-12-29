import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @ViewChild('searchBar') searchBar: HTMLElement | undefined;
  searchValue = '';
  // ngAfterViewInit() {
  //   fromEvent(this.searchBar, 'keyup')
  //     .pipe(debounceTime(400))
  //     .subscribe({
  //       next: (e) => console.log(e),
  //     });
  // }
}
