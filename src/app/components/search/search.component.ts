import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, filter, map, toArray } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private data: DataService) {}
  @ViewChild('searchBar') searchBar: any;
  suggestionArray = [];
  ngAfterViewInit(): void {
    fromEvent(this.searchBar.nativeElement, 'input')
      .pipe(debounceTime(400))
      .subscribe({
        next:()=>this.data.suggestionObs.pipe(
          filter((v)=>v.name.toLowerCase().includes(this.searchBar.nativeElement.value.toLowerCase())),
          map((v)=>v.name),
          toArray()
        ).subscribe({
          next:(data:any)=>this.suggestionArray=data
        })
      });
  }
}
