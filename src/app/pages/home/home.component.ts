import { Component, ViewEncapsulation } from '@angular/core';
import { HomeCard } from 'src/app/shared/interfaces/other.interface';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  colNum;
  gridRowNum;
  categories = ['Small Business', 'Housing', 'Employment & Wellness'];
  cards: Array<HomeCard> = [
    {
      icon: 'business_center', title: 'Newark Small Business Emergency Grants',
      link: 'small-business-grants', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'house', title: 'Forgiveable Loans for Homeowners and First-Time Buyers',
      link: 'homeowner-relief', parent: '/program', category: 'Housing'
    },
    {
      icon: 'color_lens', title: 'Fund for Artists and Arts Organizations',
      link: 'arts-fund', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'people', title: 'Safe Housing for Homeless',
      link: 'safe-housing', parent: '/program', category: 'Housing'
    },
    {
      icon: 'business_center', title: 'Help for Commercial Tenants and Property Owners',
      link: 'commercial-prop', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'people', title: 'Tenant Eviction Moratorium',
      link: 'eviction-moratorium', parent: '/program', category: 'Housing'
    },
    {
      icon: 'people', title: 'Tenant FAQs', link: 'tenants', parent: '/faqs', category: 'Housing'
    },
    {
      icon: 'house', title: 'Homeowners Mortgage Relief and Foreclosure FAQs',
      link: 'homeowners', parent: '/faqs', category: 'Housing'
    },
    {
      icon: 'business_center', title: 'N.J. Financial Help for Small Businesses',
      link: 'nj-small-business-help', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'person', title: 'Eligibility for Unemployment Benefits',
      link: 'unemployment-benefits', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'person', title: 'Finding an Essential Job During Crisis',
      link: 'finding-essential-jobs', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'people', title: 'Help from Federal “US CARES” Stimulus Package',
      link: 'federal-us-cares', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'people', title: 'For Housing Authority Tenants',
      link: 'nha-tenants', parent: '/resources', category: 'Housing'
    },
    {
      icon: 'local_dining', title: 'Food Distribution and School Lunches',
      link: 'food-dist-school-lunches', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'business_center', title: 'Invest Newark for Businesses',
      link: 'invest-newark', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'local_hospital', title: 'Health Information', link: 'health-info', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'people', title: 'Eligibility for Benefits', link: 'elgibility-benefits',
      parent: '/resources',  category: 'Employment & Wellness'
    }
  ];
  filterCat(category) {
    return category;
  }
}
