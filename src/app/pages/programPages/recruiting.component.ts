import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-recruiting',
  template: `
    <app-program [programPage]="programPage"></app-program>
  `
})
// tslint:disable: max-line-length
export class RecruitingComponent {
  programPage: ProgramPage = {
    icon: 'business_center',
    title: 'Recruiting Additional Essential Workers',
    subtitle: 'City of Newark Emergency Response Staffing Unit',
    introText: `<p><img class="intro-pic hide-sm" src='assets/img/pagePhotos/Essential Workers.jpg'><img class="intro-pic logo-sm" src='assets/img/logos/logo_nwkAlliance.png'>` +
      ' The City of Newark Emergency Response Staffing Unit is a collective recruitment effort by Newark 2020, Newark Workforce Development Board and the workforce ecosystem in the City of Newark in response to the urgent need for essential personnel in the city of Newark.' +
      ' This includes healthcare professionals, food service workers, construction tradesmen, drivers, case workers, mental health professionals, janitorial and maintenance staff.</p>',
    infoButtons: [{ link: 'https://bit.ly/CityofNewarkERSU', linkText: 'Learn More & Apply'}],
    purpose: [{
      body: 'The goal is to help reduce the strain on our healthcare professionals by increasing the number of workers in the hospitals and training our homegrown talent in the City.  We are in this together!'
    }],
    sections: [
      {
        header: 'On the City of Newark Emergency Response Staffing Unit site:',
        text: `
        <ul>
          <li>Job Seekers can:
          <ul>
            <li>Register and upload their resume to be connected to a hiring employer</li>
            <li>Access resources on virtual technology, labor trends, online tools and mental health resources</li>
            <li>Register for group and individual career coaching sessions</li>
          </ul></li>
          <li>Employers can:
          <ul>
            <li>Register their business and identify staffing needs</li>
            <li>Connect with a Job Developer or Account Manager to discuss specific sourcing strategies to meet COVID-19 related demands</li>
            <li>Connect furloughed workers to temporary roles within other companies</li>
            <li>Access resources in the following areas (on a rotating basis for now):
            <ul>
              <li>Government Resources </li>
              <li>COVID-19, Crisis Management, & Leadership During Crisis</li>
              <li>HR & Recruiting During a Crisis </li>
              <li>Mental Health Resources for Organizations</li>
              <li>Financial Resources and Services during COVID-19</li>
              <li>Managing Virtual Teams, Tools, and Best Practices </li>
              <li>Sales and Nurturing Customer Relationships</li>
              <li>Boosting Morale </li>
              <li>Marketing, Branding, and Social Media</li>
              <li>Legal Updates</li>
            </ul>
            </li>
          </ul>
        </ul>`,
        buttons: [{ link: 'https://bit.ly/CityofNewarkERSU', linkText: 'Learn More & Apply'}]
      },
      {
        header: 'Acknowledgements',
        text: `<p>This program was made possible by the collaboration of the Newark Alliance, the Workforce Development Board at Newark Regional Business Partnership and the City of Newark</p>`,
        logos: ['nwkAlliance', 'NRBP', 'nwkCity']
      }
    ]
};
}
