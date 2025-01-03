import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {

  constructor() { }
  doSortAtoZ = false;
  doSortZtoA = false;
}
