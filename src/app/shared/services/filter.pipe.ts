import { PipeTransform, Pipe } from '@angular/core';
import { HomeCard, Faq } from '../interfaces/other.interface';

@Pipe({
    name: 'FaqCat',
    pure: false
})
export class FaqCatPipe implements PipeTransform {
  transform(items: Array<Faq | HomeCard>, filter: string): any {
    if (!items || !filter) {
        return items;
    }

    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
        item => (item as any).category
        ? (item as HomeCard).category.indexOf(filter) !== -1
        : (item as Faq).Category.indexOf(filter) !== -1
        );
    }
}
