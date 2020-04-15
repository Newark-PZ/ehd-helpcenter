import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-arts-fund',
  styles: ['mat-grid-tile.uses > p {font-size: 2rem !important}'],
  template: `<app-program [programPage]="programPage"></app-program>`
})
// tslint:disable: max-line-length
export class TenantEvictionsComponent {
  programPage: ProgramPage = {
    icon: 'people',
    title: 'Tenant Eviction Moratorium',
    subtitle: 'During COVID-19 Emergency',
    introText: `<p><img class="intro-pic" src='assets/img/pagePhotos/eviction moritorium.jpg'>` +
    'The temporary suspension of evictions does not amount to a rent holiday, but merely allows tenants to remain in their homes during the health crisis. Tenants are reminded of their continued obligation to pay the rent. ' +
    'The program will help to prevent business tenants from being evicted and commercial owners from suffering foreclosure.',
    infoButtons: [{
      link: `mailto:OTLS@ci.newark.nj.us?subject=${encodeURIComponent('Tenant Eviction Moratorium Question')}`,
      linkText: 'Email EHD To Learn More'
    }],
    purpose: [{
      header: 'Statewide',
      body: 'Pursuant to Governor Murphy’s March 19, 2020 Executive Order, removal of individuals from residential properties through the eviction or foreclosure processes are prohibited until the Governor declares that the public health crisis is officially over.',
    }],
    sections: [
      {
        header: 'Newark',
        text: 'Mayor Baraka has imposed a moratorium on evictions based upon nonpayment of rent. This means that the tenant may cite the moratorium as a defense to an eviction action based upon nonpayment of rent that becomes due during the moratorium, provided the tenant can demonstrate that the nonpayment resulted from the financial hardship caused by the COVID-19 pandemic. In addition, the Essex County Sheriff’s office has confirmed that they will not be executing warrants of removal (“lockouts”) during the current public health emergency'
      },
      {
        header: 'Emergency Court Applications',
        text: `The Superior Court in Essex has an emergency judge available to hear emergency applications from tenants. The tenant must go to Room 201 (Customer Service) at the Hall of Records to file the application before 4:30PM. After 4:30PM the tenant must go to the Sheriff's Department, at Veterans Courthouse.`
      },
      {
        header: 'Questions',
        text: 'Tenants who have questions about any of the aforementioned may email the City of Newark’s Office of Tenant Legal Services at OTLS@ci.newark.nj.us. All other inquiries should be made to the City of Newark’s Law Department by calling 973-733-3880.',
        buttons: [{
          link: `mailto:OTLS@ci.newark.nj.us?subject=${encodeURIComponent('Tenant Eviction Moratorium Question')}`,
          linkText: 'Email EHD To Learn More'
        }],
      }
    ]
    };
}
