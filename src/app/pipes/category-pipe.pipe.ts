import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: any[], categories: any): any[] {
    return value.filter((v) => {
      if (
        !(
          categories.includes('eVoucher') ||
          categories.includes('evergreen') ||
          categories.includes('fashion') ||
          categories.includes('products')
        )
      ) {
        return true;
      } else if (categories.includes('eVoucher')) {
        return true;
      } else if (categories.includes('evergreen')) {
        return true;
      } else if (categories.includes('fashion')) {
        return true;
      } else if (categories.includes('products')) {
        return true;
      } else {
        return false;
      }
    });
  }

}
