import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
import * as DOMPurify from 'dompurify';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(value: any): any {
    if (value && value.length > 0) {
      return marked(value);
    }
    return DOMPurify(value);
  }
}
