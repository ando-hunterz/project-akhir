import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any, searchString: any): any {
    if(!searchString) return items;
    searchString = searchString.toLowerCase();
    return items.filter( it => {
      return it.nama_lengkap.toLowerCase().includes(searchString);
    });
   }
  }

