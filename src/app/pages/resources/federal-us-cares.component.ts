import { Component } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-federal-us-cares',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class FederalUSCaresComponent {
  resourceContent: ResourcePage = {
    title: 'How The Federal “Us Cares” Stimulus Package Can Help You',
    icon: 'people',
    sectionHeader: 'The Federal Coronavirus Aid, Relief, and Economic Security Act (CARES Act), signed into law on March 27, contains provisions that support individuals and small businesses in a number of ways.',
    programs: [
      {
        header: 'Direct Payments to Individuals and Households',
        link: 'https://www.irs.gov/newsroom/economic-impact-payments-what-you-need-to-know',
        text: `
        <p><img class="intro-pic" src='assets/img/pagePhotos/us-cares.jpeg'>Economic impact payments will begin in the next three weeks and will be distributed automatically, with no action required for most people. However, some seniors and others who do not file returns will need to submit a simple tax return to receive the stimulus payment.</p>
        <p>Eligible taxpayers who filed tax returns for either 2019 or 2018 will automatically receive an economic impact payment of up to $1,200 for individuals or $2,400 for married couples. Parents also receive $500 for each qualifying child.</p>
        <p>Tax filers with adjusted gross income up to $75,000 for individuals and up to $150,000 for married couples filing joint returns will receive the full payment. For filers with income above those amounts, the payment amount is reduced by $5 for each $100 above the $75,000/$150,000 thresholds. Single filers with income exceeding $99,000 and $198,000 for joint filers with no children are not eligible.</p>
        <p>Income is based on the <a href="https://www.irs.gov/e-file-providers/definition-of-adjusted-gross-income">adjusted gross income</a> of your 2019 tax filing (or 2018 if you have not filed your 2019 taxes). If you receive Social Security benefits but did not file a tax return, you are still eligible to receive these direct payments based on information provided by the Social Security Administration.</p>
        <p>More information can be found at the IRS resource Economic impact payments: <a href="https://www.irs.gov/newsroom/economic-impact-payments-what-you-need-to-know">What you need to know</a></p>
        `
      },
      {
        header: 'Increased Unemployment Insurance Payments, Duration, and Eligibility',
        text: `
        <p>Those already receiving unemployment insurance benefits will receive an additional $600 per week.</p>
        <p>Under a new Pandemic Unemployment Assistance program, individuals typically not eligible for unemployment compensation, such as independent contractors, self-employed workers, or those with limited employment history, will be able to receive unemployment benefits for up to 39 weeks until the end of 2020.</p>
        <p>Additionally, workers who left their job to provide coronavirus-related care to themselves, their family, or other relatives, will be eligible for unemployment benefits.</p>
        <p>Unemployment Compensation breakdown:</p><ul>
        <li>$600 in additional unemployment benefits for individuals currently qualifying under Unemployment Insurance</li>
        <li>A federal match of state Unemployment Insurance + $600 for unemployed workers who are typically ineligible</li>
        <li>A 13-week extension of unemployment compensation beyond the default state duration</li></ul>
        `
      },
      {
        header: 'Federal Taxes and Retirement Accounts',
        text: `
        <p>The deadline for filing federal taxes has been extended to July 15. If you have already filed, you can still expect to receive a refund if you are entitled to one.</p>
        <p>Additionally, the usual 10% penalty on early distributions of IRA and defined contributions plans (like 401(k) plans) has been waived for coronavirus-eligible distributions up to $100,000.</p>`
      },
      {
        header: 'Small Business Support',
        linkText: 'See Bill',
        link: 'https://www.congress.gov/bill/116th-congress/senate-bill/3548/text',
        text: `<ul>
        <li><b>Emergency grants</b>: Under the Economic Injury Disaster Loan (EIDL) program, eligible businesses may pursue grants of up to $10,000 to cover immediate operating costs.</li>
        <li><b>Forgivable loans</b>: Businesses with less than 500 employees may be eligible for loans up to $10 million. Costs associated with payroll, mortgage interest, utilities, and rent are forgivable.</li>
        <li><b>Tax Credits</b>: Employers who have partly or entirely shut down may be eligible for a tax credit of a percentage of wages paid to employees during the coronavirus public health emergency.</li>
        <li><b>Manufacturing Extension Program</b>: Eligible small and medium sized manufacturers may receive funding to support cost reduction, workforce development, product development, and growth initiatives.</li></ul>
        <a href="https://www.irs.gov/newsroom/economic-impact-payments-what-you-need-to-know"><cite style="margin-left: 1rem !important" >source: irs.gov/newsroom/economic-impact-payments-what-you-need-to-know</cite></a>`,
      }
    ]
  };
}
