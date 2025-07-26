import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[], searchTerm: string) {

   return products.filter((item)=> item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
