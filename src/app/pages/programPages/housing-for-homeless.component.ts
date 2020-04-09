import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-safe-housing',
  template: `
    <app-program [programPage]="programPage"></app-program>
  `
})
// tslint:disable: max-line-length
export class SafeHousingComponent {
  programPage: ProgramPage = {
    icon: 'people',
    title: 'Safe Housing for Homeless',
    subtitle: 'During COVID-19 ‘Shelter in Place’ Enforcement',
    introText: '<p><img class="intro-pic" src="assets/img/pagePhotos/Homeless.jpg">' +
    'In keeping with Mayor Ras J. Baraka’s aggressive citywide shelter-in-place order, a $1 million program to immediately house people in need of shelter has been put in place. ' +
    'The City has negotiated with lodging and housing providers to secure shelter for about 300 people without permanent housing and others who may otherwise be unable to self-quarantine, such as elderly in senior housing who have tested positive and risk infecting others. The locations are throughout Newark and staffed with on-site medical and food services.',
    infoButtons: [{
      linkText: 'Email EHD',
      link: `mailto:EHD@ci.newark.nj.us?subject=${encodeURIComponent('Short Term Rapid Housing')}`,
    }],
    purpose: {
      body: 'This is a public health policy. We also know that some of our most vulnerable residents, residents without addresses, may not have a safe place to lay their head, so we needed to create a new intervention and new partnerships to ensure that we are all practicing social distancing so that we can flatten the curve.' +
      '<br><br>Newark has about 400-to-500 people who are chronically unsheltered or in and out of sheltering'
    },
    sections: [
      {
        header: 'Uses',
        text: '<p>Mayor Baraka has put the entire City on the state’s most restrictive shelter-in-place order, asking all people to stay indoors except for necessary outings, such as shopping for food and medicine, seeing a doctor, dog-walking or for a brief breath of fresh air right outside of one’s home, all while maintain six-foot social distancing from one another.</p>' +
        '<p>Since that order, City officials quickly secured housing for people without indoor options. The City needed immediate access to more than 200 units or rooms to house persons in need for up to 90 days and reached out to more than a dozen housing provider partners.</p>' +
        '<p>We need to slow the transmission of this virus. To temporarily house an otherwise homeless population keeps them and our other residents safe.</p>'
      },
      {
        header: 'Information',
        text: `<p>Details on the short-term rapid housing program are available via email EHD@ci.newark.nj.us and put Short Term Rapid Housing in the subject line.</p>`,
        buttons: [{
          linkText: 'Email EHD',
          link: `mailto:EHD@ci.newark.nj.us?subject=${encodeURIComponent('Short Term Rapid Housing')}`,
        }]
      }
    ]
  };
}
