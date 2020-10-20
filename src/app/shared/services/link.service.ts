import { Link } from '../interfaces/link.class';
import { Page } from '../interfaces/other.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HomeownersFAQComponent } from '../../pages/faqs/homeowners.component';
import { TenantFAQComponent } from '../../pages/faqs/tenant.component';

@Injectable()
export class LinkService {
  constructor(
    public http: HttpClient
  ) {}
  stayingin = [
    new Link('reopen-application-requirements', 'Application & Requirements to Re-Open', 'stayingin'),
    new Link('strikeforce-reopening-plan', 'Newark Reopening Guidelines', 'stayingin'),
    new Link('newark-reopening-recovery', 'Reopening and Recovery', 'stayingin'),
    new Link('phase-one', '"Phase One" Preparation for Eventual Re-Opening', 'stayingin'),
    new Link('be-still-mondays', 'Be-Still Mondays', 'stayingin')
  ];
  programs = [
    new Link('emergency-rent-grants', 'Emergency Rent Grants', 'programs'),
    new Link('rent-increase-freeze', 'Rent Increase Freeze', 'programs'),
    new Link('testing', 'How to Get Tested', 'programs'),
    new Link('small-business-grants', 'Small Business Emergency Grants', 'programs'),
    new Link('homeowner-relief', 'Forgivable Loans for Homeowners', 'programs'),
    new Link('arts-fund', 'Artists & Arts Organization Fund', 'programs'),
    new Link('safe-housing', 'Safe Housing for Homeless', 'programs'),
    new Link('commercial-prop', 'Aid for Commercial Properties', 'programs'),
    new Link('eviction-moratorium', 'Tenant Eviction Moratorium', 'programs'),
    new Link('recruiting-essential-workers', 'Recruiting Essential Workers', 'programs'),
    new Link('measuring-covid-impact', 'Measuring COVID-19 Impact', 'programs'),
    new Link('non-profit', 'Emergency Fund for 501(c)3 Non-Profits', 'programs')
  ];
  docs = [
    new Link('remote-learning-assistance', 'Remote Learning Assistance', 'docs'),
    new Link('maskup', '#MaskUPNewark', 'docs', 'campaign'),
    new Link('home-based-business', 'Emergency Aid for Home-Based Businesses', 'docs', 'business_center'),
    new Link('reopen-requirements', 'Reopening Requirements', 'docs', 'info'),
    new Link('rent-increase-freeze-order', 'Rent Increase Freeze Order', 'docs', 'info'),
  ];
  faqs = [
    new Link('tenants', 'Tenant FAQS', 'faqs', undefined, undefined, TenantFAQComponent),
    new Link('homeowners', 'Mortgage Relief & Foreclosure FAQ', 'faqs',  undefined, undefined, HomeownersFAQComponent)
  ];
  resources = [
    new Link('nj-small-business-help', 'NJ Financial Help for Small Business', 'resources'),
    new Link('unemployment-benefits', 'Eligibility for Unemployment Benefits', 'resources'),
    new Link('finding-essential-jobs', 'Finding an Essential Job During Crisis', 'resources'),
    new Link('federal-us-cares', 'Federal “US Cares” Stimulus Package', 'resources'),
    new Link('nha-tenants', 'Info for NHA Tenants', 'resources'),
    new Link('food-dist-school-lunches', 'Food Distribution & School Lunches', 'resources'),
    new Link('health-info', 'Health Information', 'resources'),
    new Link('eligibility-benefits', 'Benefit Eligibility Chart', 'resources'),
    new Link('invest-newark', 'Invest Newark for Businesses', 'resources'),
    new Link('federal-ppp-sba-update', 'Updates on Federal PPP & SBA Programs', 'resources'),
    new Link('ppe-program', 'Sell or Buy PPE', 'resources')
  ];
  getLinks(): Array<Link> {
      return [].concat(this.stayingin, this.programs, this.faqs, this.resources, this.docs);
  }
  getPage(id: string, language: string, group: 'resources' | 'programs' | 'stayingin'): Observable<any> {
    return this.http.get<Array<Page>>(`assets/i18n/${group}/${group}-${language}.json`)
    .pipe(map((p: Array<Page>) => p.find(page => page.link === id)));
  }
  getDocPage(id: string, language: string, group: 'resources' | 'programs' | 'stayingin' | 'docs'): Link {
    return this.docs.find(d => d.id === id);
  }
}
