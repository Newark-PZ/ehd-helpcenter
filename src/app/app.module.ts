import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Universal Imports
import { routes } from './app-routing';
import { SharedModule } from './shared/shared.module';
// Component Imports
import { AppComponent } from './app.component';
import { pageComponents } from './pages';
// Store Imports and Clear State Effect
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreService } from './store/store.service';
import { StoreState, clearState, StoreReducers } from './store/store.reducers';
export const metaReducers: Array<MetaReducer<StoreState>> = [clearState];

@NgModule({
  declarations: [
    AppComponent,
    pageComponents
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    LayoutModule,
    SharedModule,
    StoreModule.forRoot(StoreReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false
      }
    })
  ],
  providers: [StoreService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
