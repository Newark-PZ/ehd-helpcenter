import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { StoreConfig } from './shared/interfaces/config.interface';
import * as fromStore from './store/store.reducers';
import * as fromStoreActions from './store/store.actions';
import * as SidebarActions from './store/sidebar/sidebar.actions';
import * as RightSidebarActions from './store/sidebarRight/sidebar.actions';
import * as ConfigActions from './store/config/config.actions';
import { take } from 'rxjs/operators';
import { SidebarLink } from './shared/interfaces/other.interface';
import { BreakpointObserver } from '@angular/cdk/layout';
import {routes} from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'ehd-emergency-mgmt';
  storeConfig: StoreConfig;
  sidebarOpenedSubscription: Subscription;
  deptDisplay: boolean;
  mayorDisplay: boolean;
  selectedModule$: Observable<string>;

  title$: Observable<string>;

  hasSidebar$: Observable<boolean>;
  sidebarOpened$: Observable<boolean>;
  sidebarMode$: Observable<string>;
  hasSidebarRight$: Observable<boolean>;
  sidebarRightOpened$: Observable<boolean>;
  sidebarRightMode$: Observable<string>;
  links: Array<SidebarLink> = [];
  rightlinks: Array<SidebarLink> = [
    { name: 'Important Link 1', icon: 'info', link: '' },
    { name: 'Important link 2', icon: 'info', link: '' }
  ];
  constructor(private store: Store<fromStore.StoreState>, public breakpointObserver: BreakpointObserver) {
    this.selectedModule$ = this.store.select(
      state => state.sidebar.selectedModule
    );
    this.title$ = this.store.select(state => state.sidebar.title);
    this.hasSidebar$ = this.store.select(state => state.sidebar.hasSidebar);
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarMode$ = this.store.select(state => state.sidebar.mode);
    this.hasSidebarRight$ = this.store.select(state => state.sidebarRight.hasSidebar);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
    this.sidebarRightMode$ = this.store.select(state => state.sidebarRight.mode);
  }

  ngOnInit() {
    routes.forEach(r => r.title ? this.links.push({ name: r.title, icon: r.icon, link: r.path }) : null);
    this.store.dispatch(new fromStoreActions.ClearState());
    this.deptDisplay = this.breakpointObserver.isMatched('(max-width: 801px)');
    this.mayorDisplay = this.breakpointObserver.isMatched('(max-width: 767px)');
    this.storeConfig = {
      sidebar: {
        collapsible: true,
        opened: false,
        title: 'Office of Planning & Zoning',
        mode: 'side'
      },
      sidebarRight: {
        collapsible: true,
        opened: false,
        mode: 'over'
      }
    };
    this.store.dispatch(new ConfigActions.SetConfig(this.storeConfig));
    if (typeof this.storeConfig !== 'undefined' && this.storeConfig !== null) {
      // register the config in the Store
      this.store.dispatch(
        new SidebarActions.SetHasSidebar(!!this.storeConfig.sidebar)
      );
      if (!!this.storeConfig.sidebar) {
        /**
         * Basic sidebar options
         */
        if (!!this.storeConfig.sidebar.collapsible) {
          this.store.dispatch(
            new SidebarActions.SetCollapsible(this.storeConfig.sidebar.collapsible)
          );
        }
        if (!!this.storeConfig.sidebar.mode) {
          this.store.dispatch(
            new SidebarActions.SetMode(this.storeConfig.sidebar.mode)
          );
        }
        if (!!this.storeConfig.sidebar.opened) {
          this.store.dispatch(
            new SidebarActions.SetOpened(this.storeConfig.sidebar.opened)
          );
        }
        if (!!this.storeConfig.sidebar.title) {
          this.store.dispatch(
            new SidebarActions.SetTitle(this.storeConfig.sidebar.title)
          );
        }
      }
    } else {
      this.store.dispatch(new SidebarActions.SetHasSidebar(false));
    }
    this.store.dispatch(new RightSidebarActions.SetHasSidebar(true));
    if (!!this.storeConfig.sidebarRight) {
      /**
       * Basic sidebar options
       */
      if (!!this.storeConfig.sidebarRight.collapsible) {
        this.store.dispatch(
          new RightSidebarActions.SetCollapsible(this.storeConfig.sidebarRight.collapsible)
        );
      }
      if (!!this.storeConfig.sidebarRight.mode) {
        this.store.dispatch(
          new RightSidebarActions.SetMode(this.storeConfig.sidebarRight.mode)
        );
      }
      if (!!this.storeConfig.sidebarRight.opened) {
        this.store.dispatch(
          new RightSidebarActions.SetOpened(this.storeConfig.sidebarRight.opened)
        );
      }
      if (!!this.storeConfig.sidebarRight.title) {
        this.store.dispatch(
          new RightSidebarActions.SetTitle(this.storeConfig.sidebarRight.title)
        );
      }
    }
  }

  toggleSidebar() {
    this.store.dispatch(new SidebarActions.Toggle());
  }

  toggleRightSidebar() {
    this.store.dispatch(new RightSidebarActions.Toggle());
  }


  ngOnDestroy() {
    if (this.sidebarOpenedSubscription) {
      this.sidebarOpenedSubscription.unsubscribe();
    }
  }
  onOpenedChange(evt: boolean) {
    this.store
      .select(state => state.sidebar.opened)
      .pipe(take(1))
      .subscribe(opened => {
        if (opened !== evt) {
          this.store.dispatch(new SidebarActions.Toggle());
        }
      });
  }
  onRightOpenedChange(evt: boolean) {
    this.store
      .select(state => state.sidebarRight.opened)
      .pipe(take(1))
      .subscribe(opened => {
        if (opened !== evt) {
          this.store.dispatch(new RightSidebarActions.Toggle());
        }
      });
  }
}
