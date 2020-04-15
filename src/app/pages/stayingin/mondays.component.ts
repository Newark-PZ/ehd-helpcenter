import { Component } from '@angular/core';
import { ResourcePage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-mondays',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class MondaysComponent {
  resourceContent: ResourcePage = {
    title: 'Be Still Mondays',
    icon: 'local_hospital',
    introContent: [{
      text:
      `<h3><img class="intro-pic" src='assets/img/pagePhotos/mondays.jpg'>
      Mayor Baraka has asked “everyone to stay home” for a nearly complete shut-down of the City of Newark on Mondays to bring attention to the severity of the COVID-19 spread in the community and help slow the spread. Be Still Mondays” will happen each week for the next month.</h3>
      <h3>If you’re not a police officer, a fireman, a nurse or other frontline medical worker, stay home.</h3>`
    }],
    programs: [{
      header: 'Exceptions',
      text: `
      <p>The City of Newark’s “Be Still Mondays” is not an executive order, but it’s a request that discourages all businesses except for health, safety, and welfare emergency services to close. For instance, businesses that provide food and shelter for the homeless population may operate but the City is asking soup kitchens to limit their operations from 11:30 a.m. to 2 p.m.</p>
      <p>The City would like businesses deemed “essential” by prior executive orders, such as food stores and pharmacies, to also close, as well as downtown corporations and manufacturing companies.</p>
      <p>The idea is to show community-wide solidarity in the face of the aggressive COVID-19 virus that is especially ravaging black and brown communities nationwide.</p>
      <p>Important: Click below for more information about the Rules`,
      linkText: 'NJ Stay at Home and Essential Business Rules',
      link: 'https://covid19.nj.gov/faqs/nj-information/general-public/what-are-the-“stay-at-home”-rules-in-new-jersey-what-businesses-are-closed'
    }]
};
}
