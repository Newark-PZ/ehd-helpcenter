import { Routes } from '@angular/router';
import * as pageComponents from './pages';
import { ResourceComponent, ProgramComponent, FaqComponent, StayinginComponent } from './shared';
import { HomeownersFAQComponent, TenantFAQComponent, ReopeningListComponent } from './pages';

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
    path: 'docs',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'reopening'
      },
      {
        path: ':id',
        component: pageComponents.DocViewComponent
      }
    ]
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
        path: ':id',
        component: ProgramComponent,
      },
      {
        path: '**',
        component: ProgramComponent
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
      path: 'reopeninglist',
      component: ReopeningListComponent
    },
    {
      path: '**',
      redirectTo: 'home'
    }
 ];
