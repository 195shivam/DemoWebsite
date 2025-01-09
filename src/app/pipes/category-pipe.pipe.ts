import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe',
  pure:false
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: any[], categories: any): any[] {
    return value.filter((v , ind) => {

      if (
        categories.length===0
      ) {

        return true;
      } else if (categories.find((obj:any)=>obj.categoryName==='eVoucher') && v.category==='e-voucher') {
        return true;
      } else if (categories.find((obj:any)=>obj.categoryName==='evergreen') && v.category==='evergreen') {
        return true;
      } else if (categories.find((obj:any)=>obj.categoryName==='fashion') && v.category==='fashion & retail') {
        return true;
      } else if (categories.find((obj:any)=>obj.categoryName==='products') && v.category==='product') {
        return true;
      } else {
        return false;
      }
    });
  }

}
