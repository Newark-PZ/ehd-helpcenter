import { Component, OnInit } from '@angular/core';
import {FaqPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-faq-tenant',
  template: `<app-faq [faqPage]="faqPage"></app-faq>`
})

export class TenantFAQComponent {
  faqPage: FaqPage = {
    type: 'Tenant',
    icon: 'people',
    title: 'Newark Tenants FAQs'
  };
}
