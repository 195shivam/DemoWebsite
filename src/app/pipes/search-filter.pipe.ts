import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], keyWords:string):any[]{
    return value.filter((v:any)=>v.name.toLowerCase().includes(keyWords.toLowerCase()))
  }

}
