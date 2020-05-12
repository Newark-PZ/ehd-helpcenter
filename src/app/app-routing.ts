import * as pageComponents from './pages';
import { Routes } from '@angular/router';
import { ResourceComponent, ProgramComponent, FaqComponent, StayinginComponent } from './shared';
import { HomeownersFAQComponent, TenantFAQComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home/',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    component: pageComponents.HomeComponent,
    path: 'home',
    data: {
      icon: 'home',
      title: 'Home'
    }
  },
  {
    component: pageComponents.DataComponent,
    path: 'data',
    data: {
      icon: 'assessment',
      title: 'Data Dashboard'
    }
  },
  {
    component: pageComponents.DocViewComponent,
    path: 'reopening',
    data: {
      icon: 'assessment',
      title: 'NJ Reopening Principles'
    }
  },
  {
    path: 'stayingin',
    children: [
      {
        component: StayinginComponent,
        path: '',
        data: {
          title: 'Staying In'
        }
      },
      {
        component: StayinginComponent,
        path: ':id'
      }
    ]
  },
  {
    path: 'programs',
    children: [
      {
        component: ProgramComponent,
        path: '',
        data: {
          title: 'Our Programs'
        }
      },
      {
        component: ProgramComponent,
        path: ':id'
      }
    ]
  },
  {
    path: 'faqs',
    children: [
      {
        component: FaqComponent,
        path: '',
        data: {
          title: 'FAQs',
        }
      },
      {
        component: HomeownersFAQComponent,
        path: 'homeowners'
      },
      {
        component: TenantFAQComponent,
        path: 'tenants'
      }
    ]
  },
  {
    path: 'resources',
    children: [
      {
        component: ResourceComponent,
        path: '',
        data: {
          title: 'Other Resources',
        }
      },
      {
        component: ResourceComponent,
        path: ':id'
      }
    ]
    },
    {
      path: '**',
      redirectTo: 'home'
    }
 ];
