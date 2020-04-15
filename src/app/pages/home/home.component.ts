import { Component, OnInit } from '@angular/core';
import { HomeCard } from 'src/app/shared/interfaces/other.interface';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import * as fromStore from '../../store/store.reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as HomePanelActions from 'src/app/store/home-panels/home-panels.actions';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  colNum;
  gridRowNum;
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  categories = ['Save Lives. Stay Safe.', 'Small Business', 'Housing', 'Employment & Wellness'];
  cards: Array<HomeCard> = [
    {
      icon: 'business_center', title: 'Newark Small Business Emergency Grants',
      link: 'small-business-grants', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'house', title: 'Forgiveable Loans for Homeowners and First-Time Buyers',
      link: 'homeowner-relief', parent: '/program', category: 'Housing'
    },
    {
      icon: 'color_lens', title: 'Fund for Artists and Arts Organizations',
      link: 'arts-fund', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'people', title: 'Safe Housing for Homeless',
      link: 'safe-housing', parent: '/program', category: 'Housing'
    },
    {
      icon: 'business_center', title: 'Help for Commercial Tenants and Property Owners',
      link: 'commercial-prop', parent: '/program', category: 'Small Business'
    },
    {
      icon: 'people', title: 'Tenant Eviction Moratorium',
      link: 'eviction-moratorium', parent: '/program', category: 'Housing'
    },
    {
      icon: 'people', title: 'Tenant FAQs', link: 'tenants', parent: '/faqs', category: 'Housing'
    },
    {
      icon: 'house', title: 'Homeowners Mortgage Relief and Foreclosure FAQs',
      link: 'homeowners', parent: '/faqs', category: 'Housing'
    },
    {
      icon: 'business_center', title: 'N.J. Financial Help for Small Businesses',
      link: 'nj-small-business-help', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'person', title: 'Unemployment Benefits',
      link: 'unemployment-benefits', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'person', title: 'Finding an Essential Job During Crisis',
      link: 'finding-essential-jobs', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'people', title: 'Help from Federal “US CARES” Stimulus Package',
      link: 'federal-us-cares', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'people', title: 'For Housing Authority Tenants',
      link: 'nha-tenants', parent: '/resources', category: 'Housing'
    },
    {
      icon: 'local_dining', title: 'Food Distribution and School Lunches',
      link: 'food-dist-school-lunches', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'business_center', title: 'INVEST NEWARK for Businesses',
      link: 'invest-newark', parent: '/resources', category: 'Small Business'
    },
    {
      icon: 'local_hospital', title: 'Health Information', link: 'health-info', parent: '/resources', category: 'Employment & Wellness'
    },
    {
      icon: 'people', title: 'Benefit Eligibility Chart', link: 'eligibility-benefits',
      parent: '/resources',  category: 'Employment & Wellness'
    },
    {
      icon: 'people', title: 'Recruiting Essential Workers', link: 'recruiting-essential-workers',
      parent: '/program',  category: 'Small Business'
    },
    {
      icon: 'people', title: 'Measuring COVID-19 Impact', link: 'measuring-covid-impact',
      parent: '/program',  category: 'Employment & Wellness'
    },
    {
      icon: 'local_hospital', title: 'Stay at Home Orders', link: 'stay-at-home',
      parent: '/stayingin', category: 'Save Lives. Stay Safe.'
    },
    {
      icon: 'local_hospital', title: 'Be Still Mondays', link: 'be-still-mondays',
      parent: '/stayingin',  category: 'Save Lives. Stay Safe.'
    }
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    private store: Store<fromStore.StoreState>,
    ) {
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
}
