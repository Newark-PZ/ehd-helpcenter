import { Component, OnInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-invest-nwk',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class InvestNWKComponent implements OnInit {
  resourceContent: ResourcePage = {
    title: 'Invest Newark Initiatives for Small Business',
    icon: 'people',
    introContent: [{
      text:
      `<p><img class="intro-pic logo" src='assets/img/logos/logo_investNWK.png'>
      Invest Newark propels the city’s strong and diverse economy, builds vibrant communities, and creates opportunities for all Newarkers. It is a dedicated team of expert planners, economists, and innovators who are driven to ensure all Newarkers have the resources to thrive. Invest Newark is not a typical development agency: it goes above and beyond to support small and minority-owned businesses, invest in world-class internet service, and maintain an intense focus on sustainability. It works to produce economic growth, generate jobs and create wealth for the people of Newark.</p>
      <p>Invest Newark has added a Covid-19 section to its website. It has information and links to federal, state and local resources for businesses affected by Covid-19</p>`,
      link: 'http://www.newarkha.org/coronavirus',
      linkText: `Info for Small Businesses`
    }],
    hideBottomBar: true
  };
  ngOnInit(): void {  }
}
