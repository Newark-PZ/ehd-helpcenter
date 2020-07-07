import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { TenantFAQComponent } from './faqs/tenant.component';
import { HomeownersFAQComponent } from './faqs/homeowners.component';
import { DataComponent } from './data/data.component';
import { DocViewComponent } from './docview/docview.component';
import { ReopeningListComponent } from './reopeningapp/reopeningapp.component';

export const pageComponents = [
    HomeComponent,
    DataComponent,
    DocViewComponent,
    HelpComponent,
    TenantFAQComponent,
    HomeownersFAQComponent,
    ReopeningListComponent
];

export * from './home/home.component';
export * from './data/data.component';
export * from './help/help.component';
export * from './docview/docview.component';
export * from './reopeningapp/reopeningapp.component';

export * from './faqs/tenant.component';
export * from './faqs/homeowners.component';
