import { Component, OnInit, Input } from '@angular/core';
import { FaqPage, TenantFaq, HomeownerFaq } from '../../interfaces/other.interface';

@Component({
  selector: 'app-faq',
  styleUrls: ['./faq.component.scss'],
  templateUrl: './faq.component.html'
})

export class FaqComponent implements OnInit {
  document: Document;
  @Input() faqPage: FaqPage;
  @Input() faqText: Array<TenantFaq | HomeownerFaq>;
  faqCategories = [];
  constructor() { }

  ngOnInit(): void {
    this.getFaq(this.faqPage.type);
    this.faqCategories = this.getCategories(this.faqPage.type);
  }

  getFaq(faq: string) {
    fetch(`assets/data/${faq}.json`)
      .then(response => response.json())
      .then((data) => this.faqText = data);
  }
  getCategories(faq: string) {
    switch (faq) {
      case 'tenants':
        return [
          'Lockout', 'Court Hearings',
          'Subsidized Tenants', 'Additional Housing Assistance',
          'Emergency Assistance', 'Electricity, Gas, Water'
        ];
      default:
        return [
          'Removals', 'Court Hearings'
        ];
    }
  }
  filterCat(cat) {
    return cat;
  }
  scrollTo(el: any) {
    document.querySelector(`#category${el}`).scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.scrollBy({top: -100, left: 0, behavior: 'smooth'});
      }, 500);
  }
}
