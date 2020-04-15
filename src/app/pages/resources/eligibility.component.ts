import { Component } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-eligibility',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class EligibilityComponent {
  resourceContent: ResourcePage = {
    title: 'COVID-19 Scenarios and Benefits Available',
    icon: 'person',
    sectionHeader: `The New jersey Department of Labor prepared this chart with information about what benefits for people with a variety of different Covid-19 related situations. These include earned sick leave, unemployment insurance, disability/family leave insurance, and workers compensation.`,
    programs: [
      {
        text: `<img class="intro-pic card" src='assets/img/pagePhotos/Covid-19 scenarios.jpg'>`,
        link: 'https://nj.gov/labor',
        linkText: 'Learn More'
      }
    ],
    hideBottomBar: true
  };
}
