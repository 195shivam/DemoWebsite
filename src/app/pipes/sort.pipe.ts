import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {

  transform(value: any[], order: number = 0): any[] {
    console.log(order)
    if (order===0) {
      return value;
    }
    else if(order===1){
      return value.sort((a, b) => a.name.localeCompare(b.name));
    }
    else{
      return value.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

}
