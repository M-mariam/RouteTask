import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
transform(products: any[], sortOption: string): any[] {
    if (!products || !sortOption) return products;

    const sorted = [...products];

    switch (sortOption) {
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'high':
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
}

}
