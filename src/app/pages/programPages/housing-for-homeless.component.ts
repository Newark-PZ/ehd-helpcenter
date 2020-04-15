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
    'In keeping with Mayor Ras J. Baraka’s aggressive citywide shelter-in-place order, a $1 million program to immediately house people in need of shelter has been put in place. The City has negotiated with lodging and housing providers to secure temporary emergency shelter for about 300 people without permanent housing and others who may otherwise be unable to self-quarantine, such as elderly people in senior housing who have tested positive for COVID-19 and risk infecting others. These temporary emergency shelters are located locations are throughout Newark and are staffed with on-site medical and food services.</p>',
    infoButtons: [{
      linkText: 'Email EHD',
      link: `mailto:EHD@ci.newark.nj.us?subject=${encodeURIComponent('Short Term Rapid Housing')}`,
    }],
    purpose: [{
      body: 'This is a public health policy. We also know that many of our residents without permanent addresses are especially vulnerable at this time as they do not have a safe and secure residence to practice social distancing. There are about 400 to 500 chronically unsheltered people in City of Newark. This intervention is not only necessary to ensure their health and safety through the provision of a safe abode equipped with on-site medical services and food, it is also a crucial measure in the City of Newark’s aggressive goal to flatten the curve.'
    }],
    sections: [
      {
        header: 'Uses',
        text: `<p>Mayor Baraka has placed the entire City of Newark on the state’s most restrictive shelter-in-place order, requiring all persons to stay indoors except for necessary outings, such as shopping for food and medicine, seeing a doctor, dog-walking or for a brief breath of fresh air right outside of one’s home, all while maintaining a distance of at least six feet from one another.</p>
        <p>Once the shelter-in-place order was issued, City officials quickly secured housing for residents without indoor options. The City reached out to more than a dozen housing providers and has been able to secure access to more than 200 units or rooms to house persons in need of shelter for up to 90 days.</p>
        <p>The provision of emergency temporary housing to an otherwise homeless population keeps them and all other residents safe, and slows the transmission of COVID-19. This effort will continue until all citizens are safely sheltered. </p>`
      },
      {
        header: 'Information',
        text: `<p>For more details on the short-term rapid housing program, please email <a href="mailto:EHD@ci.newark.nj.us?subject=${encodeURIComponent('Short Term Rapid Housing')}">EHD@ci.newark.nj.us<a> and put “Short Term Rapid Housing” in the subject line."</p>`,
        buttons: [{
          linkText: 'Email EHD',
          link: `mailto:EHD@ci.newark.nj.us?subject=${encodeURIComponent('Short Term Rapid Housing')}`,
        }]
      }
    ]
  };
}
