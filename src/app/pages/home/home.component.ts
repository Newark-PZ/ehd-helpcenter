import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  colNum;
  gridRowNum;
  cards = [
    {icon: 'business_center', title: 'Newark Small Business Emergency Grants', link: 'small-business-grants', parent: '/program' },
    {icon: 'house', title: 'Forgiveable Loans For Homeowners And First-Time Buyers', link: 'homeowner-relief', parent: '/program'},
    {icon: 'color_lens', title: 'Fund For Artists And Arts Organizations', link: 'arts-fund', parent: '/program'},
    {icon: 'people', title: 'Safe Housing For Homeless', link: 'safe-housing', parent: '/program'},
    {icon: 'business_center', title: 'Help For Commercial Tenants And Property Owners', link: 'commercial-prop', parent: '/program'},
    {icon: 'people', title: 'Tenant Eviction Moratorium', link: 'eviction-moratorium', parent: '/program' },
    {icon: 'people', title: 'Tenant F.A.Q.S', link: 'tenants', parent: '/faqs' },
    {icon: 'house', title: 'Homeowners Mortgage Relief And Foreclosure F.A.Q.S', link: 'homeowners', parent: '/faqs'},
    {icon: 'business_center', title: 'N.J. Financial Help For Small Businesses', link: 'nj-small-business-help', parent: '/resources'},
    {icon: 'person', title: 'Eligibility For Unemployment Benefits', link: 'unemployment-benefits', parent: '/resources'},
    {icon: 'person', title: 'Finding An Essential Job During Crisis', link: 'finding-essential-jobs', parent: '/resources'},
    {icon: 'people', title: 'Help From Federal “US CARES” Stimulus Package', link: 'federal-us-cares', parent: '/resources'}
  ];
}
