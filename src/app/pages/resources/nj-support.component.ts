import { Component, OnInit } from '@angular/core';
import { ResourcePage } from '../../shared/interfaces/other.interface';

@Component({
  selector: 'app-nj-support',
  template: '<app-resource [resourceContent]="resourceContent"></app-resource>'
})
// tslint:disable: max-line-length
export class NJSupportComponent implements OnInit {
  resourceContent: ResourcePage = {
    title: 'N.J. State Financial Support for Small Businesses During COVID-19 Crisis',
    icon: 'business_center',
    introContent: [{
      text:
      `<p><img class="intro-pic" src='assets/img/pagePhotos/nj small business grants.png'>A package of new initiatives from the New Jersey Economic Development Authority includes a grant program for small businesses, a zero-interest loan program for mid-size companies, support for private-sector lenders and Community Development Financial Institutions (CDFIs), funding for entrepreneurs, and a variety of resources providing technical support and marketplace information. Taken together, they will provide more than $75 million of State and private financial support, with the opportunity to grow to more than $100 million if additional philanthropic, State, and federal resources become available. The initiatives will support between 3,000 and 5,000 small and midsize enterprises and are meant to complement recently announced federal economic recovery initiatives.</p>
      <p>Businesses and nonprofits can find eligibility requirements for all programs on the COVID-19 Business Information Hub or use the Eligibility Wizard to identify which emergency assistance programs they may want to consider for their business’s specific needs. Comprehensive information about New Jersey’s response to the novel coronavirus outbreak is available here: <a href="https://covid19.nj.gov/">covid19.nj.gov/</a>.<p>`
    }],
    sectionHeader: 'Please click on each program below for more information, including full eligibility criteria.',
    programs: [
      {
        header: 'Small Business Emergency Assistance Grant Program',
        link: 'https://faq.business.nj.gov/en/articles/3835237-what-grants-are-available-for-small-and-medium-sized-businesses-via-the-njeda-small-business-emergency-assistance-grant',
        text: 'A $5 million program that will provide grants up to $5,000 to small businesses in retail, arts, entertainment, recreation, accommodation, food service, and other services – such as repair, maintenance, personal, and laundry services – to stabilize their operations and reduce the need for layoffs or furloughs. Applications for the NJEDA’s Small Business Emergency Assistance Grant Program are currently available and Applications for other NJEDA COVID-19 programs, including entrepreneurship support and technical assistance for businesses applying for U.S. Small Business Administration loans, will be available in the coming weeks.'
      },
      {
        header: 'Small Business Emergency Assistance Loan Program',
        link: 'https://faq.business.nj.gov/en/articles/3835238-what-loans-are-available-to-small-businesses-via-the-njeda-small-business-emergency-assistance-loan',
        text: 'The Small Business Emergency Assistance Loan Program is a $10 million program that will provide working capital loans of up to $100,000 to small and mid-size businesses with a physical commercial location in New Jersey. To qualify, businesses must have less than $5 million in annual revenues and be able to show a negative impact resulting from the COVID-19 outbreak. Loans made through the program will have ten-year terms with zero percent interest for the first five years, then resetting to the NJEDA’s prevailing floor rate for the remaining five years, with a three percent cap.'
      },
      {
        header: 'Community Development Finance Institution (CDFI) Emergency Loan Loss Reserve Fund',
        link: 'https://faq.business.nj.gov/en/articles/3835240-what-state-assistance-is-available-for-community-development-finance-institutions-cdfis-to-support-small-businesses',
        text: 'A $10 million capital reserve fund to take a first loss position on CDFI loans that provide low interest working capital to micro businesses. This will allow CDFIs to withstand loan defaults due to the outbreak, which will allow them to provide more loans at lower interest rates to microbusinesses affected by the outbreak.'
      },
      {
        header: 'NJ Entrepreneur Support Program',
        link: 'https://faq.business.nj.gov/en/articles/3835239-what-assistance-is-available-for-startup-investors-or-entrepreneurs-via-the-njeda-entrepreneur-guarantee-program',
        text: 'A $5 million program that will encourage continued capital flows to new companies, often in the innovation economy, and temporarily support a shaky market by providing 80 percent loan guarantees for working capital loans to entrepreneurs.'
      },
      {
        header: 'Small Business Emergency Assistance Guarantee Program',
        link: 'https://faq.business.nj.gov/en/articles/3835236-how-is-the-state-backing-small-business-loans-via-the-njeda-small-business-emergency-assistance-guarantee-program',
        text: 'A $10 million program that will provide 50 percent guarantees on working capital loans and waive fees on loans made through institutions participating in the NJEDA’s existing Premier Lender or Premier CDFI programs.'
      },
      {
        header: 'Emergency Technical Assistance Program',
        link: 'https://faq.business.nj.gov/en/articles/3835241-can-i-get-help-applying-to-federal-or-state-programs-via-the-njeda-emergency-technical-assistance-program',
        text: 'A $150,000 program that will support technical assistance to New Jersey-based companies applying for State and US Small Business Administration programs. The organizations contracted will be paid based on SBA application submissions supported by the technical assistance they provide.'
      }
    ]
  };
  ngOnInit(): void {  }
}
