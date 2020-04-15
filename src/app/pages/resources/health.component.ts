import { Component} from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-health',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class HealthComponent {
  resourceContent: ResourcePage = {
    title: 'Protect Your Health from COVID-19',
    icon: 'local_hospital',
    introContent: [{
      text:
      `<p><img class="intro-pic" src='assets/img/pagePhotos/17288_wnxjouke.png'>The Newark Department of Health and Community Wellness has extensive information about how to protect the health of your family from the virus. You will find such information as:
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
    programs: [
      {
        header: 'Revised Hours of Operation during COVID-19 Crisis',
        text: `<p>For your safety and the safety of staff, the services below will be provided over the phone or by appoinment only, until further notice. Below is the revised schedule of operations and the number to call for services during regular business hours.</p>
        <ul>
        <li>
        <h3>The WIC Program</h3>
          <ul>
            <li>Monday through Friday</li>
            <li>8:30am to 4:30pm</li>
            <li>Please call <a href="tel:9737337604">(973) 733-7604</a> for enrollment, certification, recertification. formula pickup, and counseling services</li>
          </ul>
        </li>
        <li>
        <h3>The Immunization Clinic</h3>
          <ul>
            <li>Monday through Friday</li>
            <li>8:30am to 4:30pm</li>
            <li>Please call <a href="tel:9737337580">(973) 733-7580</a> to schedule an appointment. The clinic will open on Thursdays, byt appointment only.</li>
          </ul>
        </li>
        <li>
        <h3>Social Services</h3>
          <ul>
            <li>Monday through Friday</li>
            <li>8:30am to 4:30pm</li>
            <li>Please call <a href="tel:9737339481">(973) 733-9481</a> for assistance.</li>
          </ul>
        </li>
        <br>
        <a href="https://twitter.com/NewarkDHCW/status/1250052469893271556"><cite style="margin-left: 1rem !important">source: Tweet from @DHCW</cite></a>
        `
      }
    ]
  };
}
