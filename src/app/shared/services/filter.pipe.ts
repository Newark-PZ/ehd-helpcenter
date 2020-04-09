import { PipeTransform, Pipe } from '@angular/core';
import { TenantFaq, HomeownerFaq } from '../interfaces/other.interface';

@Pipe({
    name: 'FaqCat',
    pure: false
})
export class FaqCatPipe implements PipeTransform {
  transform(items: Array<TenantFaq | HomeownerFaq>, filter: string): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.category.indexOf(filter) !== -1);
}
}
