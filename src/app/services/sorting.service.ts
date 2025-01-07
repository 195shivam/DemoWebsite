import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }
  sortingOrder=[
    {
      id:1,
      order:'AtoZ'
    },
    {
      id:2,
      order:'ZtoA'
    }
  ]
}
