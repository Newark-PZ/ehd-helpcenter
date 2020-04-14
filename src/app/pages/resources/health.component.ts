import { Component, OnInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-health',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class HealthComponent implements OnInit {
  resourceContent: ResourcePage = {
    title: 'Protect Your Health from COVID-19',
    icon: 'local_hospital',
    introContent: [{
      text:
      `<p><img class="intro-pic" src='assets/img/pagePhotos/nj small business grants.png'>The Newark Department of Health and Community Webpage has extensive information about how to protect the health of your family from the virus. You will find such information as:
      <ul>
        <li>Frequently Asked Questions (FAQ)</li>
        <li>Quick Facts</li>
        <li>How To Stop The Spread Of Germs</li>
        <li>What To Do If You Are Sick</li>
        <li>Symptoms</li>
        <li>Social Distancing</li>
        <li>Preparing For Self-Isolation And More</li>
      </ul>
      </p>`,
      link: 'https://www.newarknj.gov/card/coronavirus-information',
      linkText: 'Learn More About How to Stay Healthy'
    }],
    hideBottomBar: true
  };
  ngOnInit(): void {  }
}
