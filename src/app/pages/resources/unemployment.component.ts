import { Component } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-unemployment',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class UnemploymentBenefitsComponent {
  resourceContent: ResourcePage = {
    title: 'Eligibility for Unemployment Benefits',
    icon: 'people',
    introPic: 'assets/img/pagePhotos/unemploymentBenefits.jpg',
    introContent: [{
      header: 'You may be eligible for benefits, if you are unable to work or have had your hours reduced for the following reasons:',
      text: `<img class="intro-pic" src="assets/img/pagePhotos/unemploymentBenefits.jpg">
      <ul class="intro-list">
        <li>You tested positive for COVID-19 or have symptoms of COVID-19</li>
        <li>Your place of work was ordered closed by a public official due to COVID-19</li>
        <li>Your employer voluntarily closed due to COVID-19</li>
        <li>You were exposed to COVID-19 during the course of your work and were told to self-quarantine</li>
        <li>You were told to self-quarantine due to possible COVID-19 exposure outside your workplace</li>
        <li>Your health care provider said you were at greater risk of COVID-19-related health complications due to a pre-existing health condition and says you should not work (and telework is not possible)</li>
        <li>Your child's school or daycare was ordered closed by a public official due to COVID-19</li>
        <li>You are caring for a family or household member with COVID-19 or symptoms of COVID-19</li>
        <li>You are losing work hours due to a reduction in force related to COVID-19</li>
      </ul>`
    }],
    sectionHeader: 'More info',
    programs: [
      {
        header: 'More info about eligibility',
        link: 'https://www.nj.gov/labor/worker-protections/earnedsick/covid.shtml',
        text: `<p>Those affected personally by COVID-19 or by its impact on a family member may be eligible for a range of benefits including federal emergency paid sick leave, federal emergency childcare FMLA, earned sick leave, workers' compensation; unemployment insurance, temporary disability or family leave insurance.</p>
        <p>To find out if you are eligible and to apply for state benefits, visit the <a href="https://www.nj.gov/labor/">New Jersey Department of Labor’s website</a>. There you will also find a helpful chart clarifying the different scenarios and the available benefits in English and Spanish.</p>
        <p>Residents eligible for unemployment will receive an additional $600 per week through July 31 through additional Federal Pandemic Unemployment Assistance.</p>
        <p>In addition, freelancers, gig workers, and independent contractors - who are typically not eligible for unemployment insurance -- are able to apply for the $600 Federal Pandemic Unemployment Assistance. They should apply for unemployment now. This claim likely will be denied, but your ineligibility for regular unemployment is a prerequisite for receiving benefits due to COVID-19.</p>
        <p>In addition, Governor Murphy has signed a new law expanding the State's Temporary Disability Insurance (TDI) and Family Leave Insurance (FLI) programs to provide more workers with access to paid leave benefits during public health emergencies.</p>`
      },
      {
        link: 'https://www.nj.gov/labor/worker-protections/earnedsick/covid.shtm',
        text: `
          <p>The law allows individuals access to TDI and FLI benefits during a public health emergency if they must take time off of work because they are diagnosed with or suspected of exposure to a communicable disease or to take care of a family member diagnosed with or suspected of exposure to a communicable disease.
          <p>The bill also expands New Jersey's earned sick leave law to permit the use of earned sick time for isolation or quarantine recommended or ordered by a provider or public health official as a result of suspected exposure to a communicable disease, or to care for a family member under recommended or ordered isolation or quarantine.
          <p>More information is available at <a href='https://www.nj.gov/labor/worker-protections/earnedsick/covid.shtm'>www.nj.gov/labor/worker-protections/earnedsick/covid</a>.</p>
        `
      },
      {
        link: 'https://covid19.nj.gov/faqs/nj-information/get-assistance/am-i-eligible-for-benefits-or-unemployment-if-i-or-a-family-member-have-been-impacted-by-the-outbreak',
        text: `<p>To help employers keep workers on payroll throughout this crisis, the federal government is allowing employers to benefit from expanded paid sick and emergency childcare job-protected paid leave programs made possible by the recently enacted federal response bills. If employers do so, they will be eligible for a dollar-for-dollar payroll tax credit against those costs -- this is available to 99.8 percent of all businesses in New Jersey, and all but our largest employers.</p>`
      }
    ]
  };
}
