import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-arts-fund',
  styles: ['mat-grid-tile.uses > p {font-size: 2rem !important}'],
  template: `<app-program [programPage]="programPage"></app-program>`
})
// tslint:disable: max-line-length
export class CommercialPropComponent {
  programPage: ProgramPage = {
    icon: 'business_center',
    title: 'Helping Commercial Property Owners & Tenants',
    subtitle: 'Seriously Harmed by COVID-19 Emergency',
    introText: `<p><img class='intro-pic' src='assets/img/pagePhotos/help for commercial tenants.jpg'>`
    + 'Mayor Ras J. Baraka has launched a program to help commercial property owners and their tenants who have each lost significant income during the COVID-19 crisis to remain solvent and avoid evictions and foreclosures.'
    + 'With this program, Newark is seeking to prevent the loss of jobs and rows of empty storefronts which cause blight and demoralize those who live and work here. '
    + 'The program will help to prevent business tenants from being evicted and commercial owners from suffering foreclosure.</p>',
    download: true,
    infoButtons: [
      {
        link: 'assets/docs/Tax Relief applicataion.pdf',
        linkText: 'Download Application'
      },
      {
        link: 'assets/docs/Tax Liability Relief  Agreement 4.8.20 (002).pdf',
        linkText: 'Download Agreement'
      },
      {
        link: 'assets/docs/Tax Relief Certifications.pdf',
        linkText: 'Download Certification'
      },
      {
        link: `mailto:ehd@ci.newark.nj.us?subject=${encodeURIComponent('Application for Commercial Property Tax Relief')}`,
        linkText: 'Apply via Email',
        fullWidth: true
      }
    ],
    purpose: [{
      header: 'Provides property tax reductions passed along to tenants',
      body: 'If commercial tenants are no longer able to pay their full rent during the Covid-19 crisis, property owners will be hard-pressed to pay their property taxes and be in danger of losing their buildings. This initiative will help avoid a massive surge in vacancies that could seriously damage the city’s culture, character, economic stability and reverse the extraordinary progress Newark has been making.',
    }],
    sections: [
    {
      header: 'How It Works',
      text: '<p>Under the program, property owners and tenants would apply jointly for significant property tax relief in proportion to the property owner’s loss of revenue. In exchange for the property tax relief, the owner would agree to not evict a tenant for non-payment of rent for one year from the date of approval of relief.</p>' +
      '<p>The loss in revenue due to COVID-19 for both landlord and tenant must be greater than 33 percent of regular income for the tenant space and respective business in order to qualify. The City will significantly reduce the property tax of the tenant’s space, through cancellation, depending on the specifics of the arrangement between the tenant and property owner. Depending on the length of the shutdown and extent of income loss, the tenant and property owner may re-apply after 12 months.</p>'
    },
    {
      header: 'Inquire Today',
      text: `To learn more, you can contact Newark's Tax Assesor Aaron Wilson by email at <a href="mailto:wilsonaa@ci.newark.nj.us?subject=${encodeURIComponent('Application for Commercial Property Tax Relief')}">wilsonaa@ci.newark.nj.us</a> or by phone at <a href="tel:9737338509">(973) 733-8509</a>. To apply include the completed application and documentation as attachments.`,
      buttons: [
        {
          link: 'assets/docs/Tax Relief applicataion.pdf',
          linkText: 'Download Application'
        },
        {
          link: 'assets/docs/Tax Liability Relief  Agreement 4.8.20 (002).pdf',
          linkText: 'Download Agreement'
        },
        {
          link: 'assets/docs/Tax Relief Certifications.pdf',
          linkText: 'Download Certification'
        },
        {
          link: `mailto:wilsonaa@ci.newark.nj.us?subject=${encodeURIComponent('Application for Commercial Property Tax Relief')}`,
          linkText: 'Apply via Email',
          fullWidth: true
        }
      ],
    }
  ]
};
}
