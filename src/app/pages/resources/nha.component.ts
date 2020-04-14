import { Component, OnInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-nha-info',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class NHAComponent implements OnInit {
  resourceContent: ResourcePage = {
    title: 'Information for Newark Housing Authority Tenants',
    icon: 'people',
    introContent: [{
      text:
      `<p><img class="intro-pic" src='assets/img/pagePhotos/nj small business grants.png'>The Newark Housing Authority has extensive information for tenants on its website.</p>
      <p>Residents of senior buildings and townhouses and Section 8 participants can find answers to questions about rent payments, visiting, deliveries, hours, service changes, repairs, community rooms, recertifications, inspections and more.<p>`,
      link: 'http://www.newarkha.org/coronavirus',
      linkText: `Learn More at NHA's Website`
    }],
    hideBottomBar: true
  };
  ngOnInit(): void {  }
}
