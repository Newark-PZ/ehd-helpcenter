import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-small-bis-grants',
  template: `
    <app-program [programPage]="programPage"></app-program>
  `
})
// tslint:disable: max-line-length
export class SmallBisGrantsComponent {
  programPage: ProgramPage = {
    icon: 'business_center',
    title: 'Newark 2020 Emergency Fund',
    subtitle: 'For Small Businesses Impacted By Covid-19',
    introText: `<p><img class="intro-pic" src='assets/img/pagePhotos/Newark small business emergency grants.jpeg'>` +
      ' Businesses nationwide are suffering enormous impacts related to COVID-19.' +
      ' As one way to help impacted businesses and Newark families, Mayor Ras J. Baraka has taken the initiative to provide financial help to those who qualify.' +
      ' To mitigate barriers to capital for Newark’s most vulnerable small businesses, the City of Newark has committed $2 million in funding.' +
      ' This program may be used in conjunction with other emergency aid supplied by the State of New Jersey and the federal government.</p>',
    infoButtons: [{ link: 'https://www.surveymonkey.com/r/NewarkSmallBusinessCOVID19Grant'}],
    purpose: {
      body: 'This grant helps small businesses with losses they have experienced through loss of income, payroll loss, sales, etc. This emergency fund will provide working capital grants in amounts up to Ten Thousand Dollars ($10,000) to qualifying small businesses.'
    },
    sections: [
      {
        header: 'Uses',
        text: 'Proceeds can be used for accounts payable, payroll, inventory, equipment, business compliance, licensing renewal, utilities, business capacity, legal, financial services, rent, insurance, business taxes, supplies or most business-related items, subject to funding availability.'
      },
      {
        header: 'Requirements',
        text: `<p>If you represent a small business or non-profit organization in the City of Newark and your business is experiencing financial losses due to this crisis, you may be eligible to apply if you meet the following conditions:</p>
        <ul>
          <li>A small business in Newark who is experiencing financial losses due to this crisis</li>
          <li>A physical establishment located in Newark</li>
          <li>Have ten (10) employees or less</li>
          <li>Experienced a direct loss of income due to COVID-19</li>
        </ul>`
      },
      {
        header: 'Other Information',
        text: `<p>For more information about this fund, the documentation that must be submitted and an application click apply now</p>
        <ul>
          <li>The deadline to apply is April 30, 2020</li>
          <li>Applicants will be notified within 7 days of submitting an application as to whether they have been selected to receive a grant</li>
          <li>Those selected will receive their grants within 30 days of submitting an application.</li>
        </ul>`,
        buttons: [{
          link: 'https://www.surveymonkey.com/r/NewarkSmallBusinessCOVID19Grant'
        }],
      },
      {
        header: 'Acknowledgements',
        text: `<p>Mayor Baraka’s Newark Economic and Housing Development Department in partnership with United Way of Greater Newark and Invest Newark as sponsors and coordinating partners and Prudential as sponsor are working together in this effort to provide relief while assessing the economic impacts related to COVID-19 on our small business community.</p>`,
        logos: ['nwkCity', 'prudential', 'unitedWay', 'investNWK']
      }
    ]
};
}
