import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-homeowner-loans',
  template: `
    <app-program [programPage]="programPage"></app-program>
  `
})
// tslint:disable: max-line-length
export class HomeownerLoansComponent {
  programPage: ProgramPage = {
    icon: 'house',
    title: 'COVID-19 Relief Program',
    subtitle: 'For Homeowners & First-Time Buyers',
    introText: `<p><img class='intro-pic' src='assets/img/pagePhotos/Forgivable loans.jpg'>`
      + 'As part of his ongoing COVID-19 financial stimulus package, Mayor Ras J. Baraka announced that Newark will add an additional $1 million dollars into its “Live Newark” program, designed to give City residents access to home ownership.'
      + 'Home ownership stabilizes neighborhoods. It’s a key component of Mayor Baraka’s equitable growth vision for the City, in terms of safety, education and economic prosperity. When people own their homes, they have a greater investment in the well-being of their neighborhoods.'
      + 'The $1 million in additional funds will make existing programs available to more residents, at a time when homeownership is endangered by the Covid-19 Crisis.</p>',
    infoButtons: [{
      linkText: 'Learn More & Apply',
      link: 'https://www.newarknj.gov/departments/economichousing'
    }],
    purpose: [{
      header: 'Forgivable Loans',
      body: 'The program provides $5,000 down payment forgivable loans to first-time home buyers and forgivable loans up to $15,000 for homeowners undertaking external repairs. There are also $5,000 down payment forgivable loans to City employees. The forgivable loan terms all require the recipient to live in the house for at least five years.',
      rows: '1'
    }],
    sections: [
      {
        header: 'Programs',
        text: `<ul><h3>Closing Cost Program</h3><li>Provides $5000 no interest loans to first-time homebuyers to purchase a home in Newark. The loan is forgiven after the recipient has lived in the home for five years.</li>` +
        `<h3>Façade Improvement Program</h3><li>Creates pride in ownership, preserves or increase the value of residential properties, beautifies neighborhoods by helping to fund facade repair and other external improvements such as repairs to or replacement of roofs, porches, driveways, windows and doors; painting or siding; landscaping, etc. It provides up to a $15,000 no interest forgivable loan for owner-occupied homes.</li>` +
        `<h3>Municipal Employee Housing Assistance Program</h3><li>Provides $5000 no interest loans to City employees to purchase a home as first-time homebuyers in Newark. The loan is forgiven after the recipient has lived in the home for five years.</li></ul>` +
        `<p>Click "Learn More" below to find applications for the Live Newark programs and more detailed information</p>`,
        buttons: [
          {
            link: 'https://www.newarknj.gov/departments/economichousing',
            linkText: 'Learn More & Apply'
          }
        ]
      },
      {
        header: 'Acknowledgements',
        text: `<p>The funds come from the U.S. Department of Housing and Urban Development (HUD) as part of its Home Investment Partnership Program, designed to help states and cities provide decent and affordable housing for urban Americans.</p>`,
        logos: ['nwkCity', 'usHUD']
      }
    ]
  };
}


