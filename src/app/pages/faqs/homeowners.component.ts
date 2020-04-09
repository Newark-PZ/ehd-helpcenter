import { Component } from '@angular/core';
import {FaqPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-faq-tenant',
  template: `<app-faq [faqPage]="faqPage"></app-faq>`
})

export class HomeownersFAQComponent {
  faqPage: FaqPage = {
    type: 'homeowners',
    icon: 'house',
    title: 'Homeowners Mortgage Relief And Foreclosure F.A.Q.S'
  };
}
