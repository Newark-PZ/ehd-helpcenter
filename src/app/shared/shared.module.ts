import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
// import * as fromComponents from './components';

const matModules = [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
];

@NgModule({
    declarations: [
        // ...fromComponents.components
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        matModules,
        // ...fromComponents.components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        matModules
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
