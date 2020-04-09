import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-arts-fund',
  styles: ['mat-grid-tile.uses > p {font-size: 2rem !important}'],
  template: `<app-program [programPage]="programPage"></app-program>`
})
// tslint:disable: max-line-length
export class ArtsFundComponent {
  programPage: ProgramPage = {
    icon: 'color_lens',
    title: 'Creative Catalyst Fund',
    subtitle: 'For Artists and Arts Organizations Impacted By COVID-19',
    introText: `<p><img class="intro-pic" src="assets/img/pagePhotos/arts.jpg" >` +
      'Mayor Ras J. Baraka launched the Creative Catalyst Fund to provide artists and art groups with flexible grant support during the Coronavirus crisis and beyond.' +
      ' In January 2020, Mayor Baraka announced a broad vision for the City’s cultural sector to encourage equitable funding for the arts that sustains the creative community and grassroots arts organizations.' +
      ' Since then, the City launched its first arts grant program, the Creative Catalyst Fund, to ensure that the arts continue to thrive. In light of the COVID-19 crisis, the City acted to streamline operations, increasing the flexibility in how grantees may use awarded funds.',
    infoButtons: [{
      link: 'https://newarkarts.org/creative-catalyst-fund/'
    }],
    purpose: {
      body: 'In collaboration with Newark Arts, the Fund will support the local community of artists as well as small-to-midsize arts and cultural organizations, all of which provide social and economic value to Newark by revitalizing neighborhoods, inspiring students, and improving the quality of life for city residents. The Fund will provide up to $1 million dollars annually for at least the next three years, beginning with $750,000 provided by the City to seed the initiative.',
    },
    sections: [
    {
      header: 'Prospective applicants can choose between two grant streams, based on eligibility:',
      text: `<ul><li>General Operating Support</li>
      <p>for Newark-based non-profit arts and cultural organizations with annual operating budgets up to $2 million.  The grant range is $2,500 - $50,000. Grants over $5,000 must be matched by funds raised from other sources.<p>
      <li>Artist Fellowships</li>
      <p>for Newark-based individual artists or unincorporated artist collectives working in any artistic discipline.  The grant range is $1,000 - $10,000. There is no matching requirement.</p></ul>
      <p>For grant applications and more information click apply. Applications will be accepted until Friday, May 1, 2020.</p>`,
      buttons: [{
        link: 'https://newarkarts.org/creative-catalyst-fund/'
      }],
    },
    {
      header: 'Acknowledgments',
      text: `The Fund aligns with <a href="https://newarkarts.org/newark-creates/">Newark Creates</a>, a cultural plan researched and developed by Newark Arts, and made final in 2019. Newark Creates is a collaborative plan on behalf of the City. The plan, funded by Prudential and The Geraldine R. Dodge Foundation, details an 18-month organized initiative of community members, nonprofit, for-profit, and governmental stakeholders working together to advance an equitable foundation for Newark to thrive with arts and culture.`,
      logos: [
        'nwkCity',
        'prudential',
        'dodgeFoundation'
      ]
    }
  ]};
}
