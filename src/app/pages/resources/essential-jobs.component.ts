import { Component } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-essential-jobs',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class EssentialJobsComponent {
  resourceContent: ResourcePage = {
    title: 'Finding a Job During the COVID-19 Crisis',
    icon: 'person',
    introContent: [{
      linkText: 'Link to Jobs Portal',
      link: 'https://jobs.covid19.nj.gov/index.html?Facets.filterbox.filter0=%5B%5D&Facets.filterbox.filter1=%5B%5D',
      text: `<p><img class="intro-pic" src='assets/img/pagePhotos/Finding a job.jpg' style="height: 100%;">Some Newark residents have lost their job or had their hours reduced as a result of COVID-19. During this crisis, businesses across New Jersey need thousands of workers for immediate hire. Visit the NJ Covid-19 Employment Portal to about what companies are hiring in the Newark area.</p>`
    }],
    hideBottomBar: true
  };
}
