import { Component } from '@angular/core';
import {FaqPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-faq-tenant',
  template: `<app-faq [faqPage]="faqPage"></app-faq>`
})
// tslint:disable: max-line-length
export class HomeownersFAQComponent {
  faqPage: FaqPage = {
    type: 'Homeowners',
    icon: 'house',
    title: 'Homeowners Mortgage Relief And Foreclosure FAQs',
    contentIntro: {
      header: 'Mortgage Relief and Forbearance',
      paragraphs: [ `Many financial institutions will provide mortgage forbearance and financial protections for New Jerseyans facing economic hardship as a result of COVID-19. More than 150 federal and state-chartered banks, credit unions, and servicers are participating. Contact and work directly with your mortgage servicer to learn about and apply for available relief. Lenders participating in the state's voluntary mortgage modification program are expected to extend the terms of these loans to allow for repayment at the end of the loan period.`],
      buttons: [{
        title: 'More Information About Mortgage Relief',
        extUrl: 'https://www.state.nj.us/dobi/covid/mortgagerelief.html'
      }]
    }
  };
}
