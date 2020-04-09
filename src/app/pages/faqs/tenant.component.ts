import { Component, OnInit } from '@angular/core';
import {FaqPage} from '../../shared/interfaces/other.interface';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-faq-tenant',
  template: `<app-faq [faqPage]="faqPage"></app-faq>`
})

export class TenantFAQComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) { }

  faqPage: FaqPage = {
    type: 'tenants',
    icon: 'people',
    title: 'Newark Tenants F.A.Q.S'
  };
  ngOnInit(): void {  }
}
