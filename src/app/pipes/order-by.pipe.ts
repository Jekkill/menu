import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any, args?: any): any {
    return arr.sort((a, b) => {
      if (a.name > b.name || a.type < b.type) {
        return 1;
      }
      if (a.name < b.name || a.type > b.type) {
        return -1;
      }
      return 0;
    });
  }

}
