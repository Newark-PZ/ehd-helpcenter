import { Component } from '@angular/core';
import {ProgramPage} from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-measuring-impact',
  template: `
    <app-program [programPage]="programPage"></app-program>
  `
})
// tslint:disable: max-line-length
export class MeasuringImpactComponent {
  programPage: ProgramPage = {
    icon: 'business_center',
    title: 'Measuring the Impact of COVID-19',
    subtitle: 'On Newark Businesses and Residents',
    introText: `<p><img class="intro-pic hide-sm" src='assets/img/pagePhotos/Measuring Impact.jpeg'><img class="intro-pic logo-sm" src='assets/img/logos/logo_nwkAlliance.png'>` +
    `Newark Alliance is dedicated to the ongoing economic revitalization of Newark, striving to transform our city into a better and safer place to work, live, learn, play and do business. Supported by corporate and community partners, the Alliance has successfully leveraged Newark's competitive assets to generate economic growth for the city, state, region and beyond. Through innovative partnerships with stakeholders, the Alliance is delivering equitable growth for residents and visitors alike, advancing Newark's renaissance into one of America's great cities. It is now working to survey the impact of the COVID-19 Crisis. If you are an employer or resident, please fill out the appropriate survey below.</p>`,
    infoButtons: [
      { link: 'https://bit.ly/Newark2020COVIDimpacysurvey', linkText: 'Business Impact Survey'},
      { link: 'https://bit.ly/CandidateNeedsSurvey1', linkText: 'Newark Resident Needs Survey'}
    ],
    purpose: [{
      body:  `It's important that we measure the impact of COVID-19 on Newark residents and businesses so that future employment programs are based on real needs and not assumptions.`
    }],
    sections: [
      {
        header: 'Employer COVID-19 Business Impact Survey',
        text: `
        <h3>Employer’s Share the Impact of COVID-19 on Your Business</h3>
        <p>We recognize the seriousness of the pandemic and many unprecedented challenges that our employer partners face. We are surveying employers to gauge the impact of COVID-19 on our businesses locally, so that we may provide connections to needed information and resources and adjust our talent sourcing strategies to meet the changing needs of our employer partners, and train candidates with new virtual workplace skills and technologies to adapt to this "next normal."</p>
        <p>In addition to the high-level survey below, please let us know how we can best support you during this time.</p>`,
        buttons: [{ link: 'https://bit.ly/Newark2020COVIDimpacysurvey', linkText: 'Business Impact Survey'}]
      },
      {
        header: 'Citywide Personal and Professional Needs Assessment',
        text: `
        <h3>Newark Residents, your input is needed!</h3>
        <p>We are surveying Newark residents to determine your personal and professional needs in response to COVID-19 so that we can offer services that are in most demand. Please take 3 minutes to complete the survey.</p>`,
        buttons: [{ link: 'https://bit.ly/CandidateNeedsSurvey1', linkText: 'Newark Resident Needs Survey'}]
      },
    ]
};
}
