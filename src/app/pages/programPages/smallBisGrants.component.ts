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
    subtitle: 'For Small Businesses Impacted By COVID-19',
    introText: `<p><img class="intro-pic" src='assets/img/pagePhotos/Newark small business emergency grants.jpeg'>` +
      ' Businesses nationwide are suffering enormous impacts related to COVID-19.' +
      ' As one way to help impacted businesses and Newark families, Mayor Ras J. Baraka has taken the initiative to provide financial help to those who qualify.' +
      ' To mitigate barriers to capital for Newark’s most vulnerable small businesses, the City of Newark has committed $2 million in funding.' +
      ' This program may be used in conjunction with other emergency aid supplied by the State of New Jersey and the federal government.</p>',
    infoButtons: [{ link: 'https://www.surveymonkey.com/r/NewarkSmallBusinessCOVID19Grant'}],
    purpose: [{
      body: 'This grant helps small businesses with losses they have experienced through loss of income, payroll loss, sales, etc. This emergency fund will provide working capital grants in amounts up to Ten Thousand Dollars ($10,000) to qualifying small businesses.'
    }],
    sections: [
      {
        header: 'Uses',
        text: 'Proceeds can be used for most business-related items, including but not limited to, accounts payable, payroll, inventory, equipment, business compliance, licensing renewal, utilities, business capacity, legal, financial services, rent, insurance, business taxes, or supplies, subject to funding availability.'
      },
      {
        header: 'Requirements',
        text: `<p>If you represent a small business or non-profit organization in the City of Newark, you may be eligible to apply if you meet the following conditions:</p>
        <ul>
          <li>A physical establishment located in the City of Newark</li>
          <li>Have ten (10) employees or less</li>
          <li>Experienced a direct loss of income due to COVID-19</li>
        </ul>`
      },
      {
        header: 'Other Information',
        text: `
        <ul>
          <li>The deadline to apply is April 30, 2020</li>
          <li>Applicants will be notified within 14 days of submitting an application as to whether they have been selected to receive a grant</li>
          <li>Those selected will receive their grants within 30 days of submitting an application.</li>
          <li>For more information regarding the necessary documents that must be submitted and to complete an application, click “APPLY NOW” below.</li>
        </ul>`,
        buttons: [{
          link: 'https://www.surveymonkey.com/r/NewarkSmallBusinessCOVID19Grant'
        }],
      },
      {
        header: 'Acknowledgements',
        text: `<p>Under the guidance of Mayor Baraka’s, the City of Newark’s Department of Economic and Housing Development Department is collaborating in partnership with Prudential, the United Way of Greater Newark, and Invest Newark in this effort to alleviate the economic impacts of COVID-19 on our small business community.</p>`,
        logos: ['nwkCity', 'prudential', 'unitedWay', 'investNWK']
      }
    ]
};
}
