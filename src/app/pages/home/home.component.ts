import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HomeCard } from 'src/app/shared/interfaces/other.interface';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import * as fromStore from '../../store/store.reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as HomePanelActions from '../../store/home-panels/home-panels.actions';
import { showHidePanel } from '../../shared/animations';

@Component({
  animations: [showHidePanel],
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
// tslint:disable: max-line-length
export class HomeComponent implements OnInit {
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  categories$: Observable<Array<{name: string; expanded: boolean; }>>;
  cards: Array<HomeCard> = [{
        icon: 'people',
        title: 'Benefit Eligibility Chart',
        link: 'eligibility-benefits',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Emergency Fund for 501(c)3 Non-Profits',
        link: 'non-profit',
        parent: '/programs',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Finding an Essential Job During Crisis',
        link: 'finding-essential-jobs',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_dining',
        title: 'Food Distribution and School Lunches',
        link: 'food-dist-school-lunches',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_hospital',
        title: 'Health Information',
        link: 'health-info',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Measuring COVID-19 Impact',
        link: 'measuring-covid-impact',
        parent: '/programs',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Unemployment Benefits',
        link: 'unemployment-benefits',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Unemployment Benefits for Self-Employed',
        link: '',
        parent: '',
        category: 'Employment & Wellness',
        id: 'self-employed',
        extUrl: 'https://myunemployment.nj.gov/labor/myunemployment/independentcontractors.shtml'
      },
      {
        icon: 'house',
        title: 'Emergency Rent Grants',
        link: 'emergency-rent-grants',
        parent: '/programs',
        category: 'Housing',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Rent Increase Freeze for Rent Controlled Tenants',
        link: 'rent-increase-freeze',
        parent: '/programs',
        category: 'Housing',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Online Seminar for Tenants and Homeowners',
        link: 'web-housing-seminar',
        parent: '/docs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'For Housing Authority Tenants',
        link: 'nha-tenants',
        parent: '/resources',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'house',
        title: 'Forgiveable Loans for Homeowners and First-Time Buyers',
        link: 'homeowner-relief',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'house',
        title: 'For Homeowners-Mortgage Relief, Foreclosure FAQs, Forbearances',
        link: 'homeowners',
        parent: '/faqs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Safe Housing for Homeless',
        link: 'safe-housing',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Tenant Eviction Moratorium and Other Tenant Information',
        link: 'eviction-moratorium',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Tenant FAQs',
        link: 'tenants',
        parent: '/faqs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'verified_user',
        title: 'Application & Requirements to Re-Open',
        link: 'reopen-application-requirements',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'campaign',
        title: 'Newark Reopening Guidelines and Summer Activities',
        link: 'strikeforce-reopening-plan',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'campaign',
        title: '#MaskUPNewark',
        link: 'maskup',
        parent: '/docs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.'
      },
      {
        icon: 'people',
        title: 'Reopening and Recovery Strikeforce',
        link: 'newark-reopening-recovery',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_hospital',
        title: 'How to Get Tested',
        link: 'testing',
        parent: '/programs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'NJ State Reopening Principles',
        link: 'reopening',
        parent: '/docs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'verified_user',
        title: '"Phase One" Preparation for Eventual Re-Opening',
        link: 'phase-one',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'info',
        title: 'More Newark News',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'newark-news',
        extUrl: 'https://newarknj.gov/news'
      },
      {
        icon: 'info',
        title: 'Newark Municipal Court Accepts Online Payments, Video Hearings',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'newark-municipal-court',
        extUrl: 'https://www.newarknj.gov/news/newark-municipal-court-now-holding-video-sessions-via-zoom-court-will-also-accept-online-payments-and-dispute-tickets-online'
      },
      {
        icon: 'business_center',
        title: 'Updates on Federal PPP & SBA Programs',
        link: 'federal-ppp-sba-update',
        parent: '/resources',
        category: 'Small Business',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'Updates to List of Essential Businesses Permitted to Operate',
        category: 'Small Business',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: 'updated-list-essential',
        extUrl: 'https://www.nj.gov/governor/news/news/562020/approved/20200427d.shtml'
      },
      {
        icon: 'business_center',
        title: 'Emergency Fund for Home-Based Businesses',
        link: 'home-based-business',
        parent: '/docs',
        category: 'Small Business',
      },
      {
        icon: 'local_hospital',
        title: 'Sell or Buy PPE',
        link: 'ppe-program',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'info',
        title: 'Applications for Expanded Small Business Aid Available June 9th',
        category: 'Small Business',
        id: 'expanded-business-aid',
        extUrl: 'https://faq.business.nj.gov/en/articles/3835237-what-is-the-status-of-the-njeda-small-business-emergency-assistance-grant-program-phase-2-application-open-tuesday-june-9-at-9-00-a-m'
      },
      {
        icon: 'color_lens',
        title: 'Fund for Artists and Arts Organizations',
        link: 'arts-fund',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'Help for Commercial Tenants and Property Owners',
        link: 'commercial-prop',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Help from Federal “US CARES” Stimulus Package',
        link: 'federal-us-cares',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'INVEST NEWARK for Businesses',
        link: 'invest-newark',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'N.J. Financial Help for Small Businesses',
        link: 'nj-small-business-help',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'Newark Small Business Emergency Grants',
        link: 'small-business-grants',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Recruiting Essential Workers',
        link: 'recruiting-essential-workers',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      }
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    private store: Store<fromStore.StoreState>,
    ) {
    this.categories$ = this.store.select(state => state.homePanel.categories);
    this.expansionOpen$ = this.store.select(state => state.homePanel.open);
    this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
    this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
  }
  ngOnInit() {
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.store.dispatch(new HomePanelActions.SetMulti(false));
        this.store.dispatch(new HomePanelActions.SetOpen(false));
        this.store.dispatch(new HomePanelActions.SetToggle(false));
      } else {
        this.store.dispatch(new HomePanelActions.SetMulti(true));
        this.store.dispatch(new HomePanelActions.SetOpen(true));
        this.store.dispatch(new HomePanelActions.SetToggle(true));
      }
    });
  }
  filterCat(category) {
    return category;
  }
  expandCat(cat: {name: string; expanded: boolean; }) {
    this.store.dispatch(new HomePanelActions.SetExpandedCategory(cat.name));
  }
  goTo(url?: string) {
    if (url) {window.open(url, '_self'); }
  }
}
