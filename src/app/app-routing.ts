import * as pageComponents from './pages';
import { SidebarLink } from './shared/interfaces/other.interface';
import { RedirectComponent } from './shared';

export const routes: Array<SidebarLink> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    component: pageComponents.HomeComponent,
    path: 'home',
    icon: 'home',
    title: 'Home',
    isChild: false
  },
  {
    component: pageComponents.HelpComponent,
    path: 'help',
    icon: 'help',
    isChild: false
  },
  {
    path: 'program',
    title: 'Our Programs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'small-business-grants'
      },
      {
        component: pageComponents.SmallBisGrantsComponent,
        path: 'small-business-grants',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Small Business Emergency Grants',
        isChild: true
      },
      {
        component: pageComponents.HomeownerLoansComponent,
        path: 'homeowner-relief',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Forgivable Loans for Homeowners',
        isChild: true,
      },
      {
        component: pageComponents.ArtsFundComponent,
        path: 'arts-fund',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Artists & Arts Organization Fund',
        isChild: true
      },
      {
        component: pageComponents.SafeHousingComponent,
        path: 'safe-housing',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Safe Housing for Homeless',
        isChild: true
      },
      {
        component: pageComponents.CommercialPropComponent,
        path: 'commercial-prop',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Aid for Commercial Properties',
        isChild: true
      },
      {
        component: pageComponents.TenantEvictionsComponent,
        path: 'eviction-moratorium',
        parentFragment: '/program',
        icon: 'subdirectory_arrow_right',
        title: 'Tenant Eviction Moratorium',
        isChild: true
      }]
  },
  {
    path: 'faqs',
    title: 'FAQs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tenants'
      },
      {
        component: pageComponents.TenantFAQComponent,
        path: 'tenants',
        parentFragment: '/faqs',
        icon: 'subdirectory_arrow_right',
        title: 'Tenant FAQS',
        isChild: true
      },
      {
        component: pageComponents.HomeownersFAQComponent,
        path: 'homeowners',
        parentFragment: '/faqs',
        icon: 'subdirectory_arrow_right',
        title: 'Mortgage Relief & Foreclosure FAQ',
        isChild: true
      }
    ]
  },
  {
    path: 'resources',
    title: 'Other Resources',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'nj-small-business-help'
      },
      {
        component: pageComponents.NJSupportComponent,
        path: 'nj-small-business-help',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'NJ Financial Help for Small Business',
        isChild: true
      },
      {
        component: pageComponents.UnemploymentBenefitsComponent,
        path: 'unemployment-benefits',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Eligibility for Unemployment Benefits',
        isChild: true
      },
      {
        component: pageComponents.EssentialJobsComponent,
        path: 'finding-essential-jobs',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Finding an Essential Job During Crisis',
        isChild: true
      },
      {
        component: pageComponents.FederalUSCaresComponent,
        path: 'federal-us-cares',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Federal “US Cares” Stimulus Package',
        isChild: true
      },
      {
        component: pageComponents.NHAComponent,
        path: 'nha-tenants',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Info for NHA Tenants',
        isChild: true
      },
      {
        component: pageComponents.FoodComponent,
        path: 'food-dist-school-lunches',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Food Distribution & School Lunches',
        isChild: true
      },
      {
        component: pageComponents.HealthComponent,
        path: 'health-info',
        parentFragment: '/resources',
        icon: 'subdirectory_arrow_right',
        title: 'Health Information',
        isChild: true
      }
    ]
  }
 ];
