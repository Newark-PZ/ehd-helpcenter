import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreConfig } from '../shared/interfaces/config.interface';
import * as ConfigActions from './config/config.actions';
import * as fromConfig from './config/config.reducers';
import * as StoreActions from '../store/store.actions';
import * as fromStore from '../store/store.reducers';
import * as PageActions from './page/page.actions';
import * as fromPage from './page/page.reducers';
import * as RightSidebarActions from './sidebarRight/sidebar.actions';
import * as fromRightSidebar from './sidebarRight/sidebar.reducers';
import * as SidebarActions from './sidebar/sidebar.actions';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as i18nActions from './i18n/i18n.actions';
import * as fromI18n from './i18n/i18n.reducers';
import * as homePanelActions from './home-panels/home-panels.actions';
import * as fromHomePanel from './home-panels/home-panels.reducers';
import { Page } from '../shared/interfaces/other.interface';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    configState$: Observable<fromConfig.State>;
    sidebarState$: Observable<fromSidebar.State>;
    rightSidebarState$: Observable<fromRightSidebar.State>;
    i18nState$: Observable<fromI18n.State>;
    homePanelsState$: Observable<fromHomePanel.State>;
    pageState$: Observable<fromPage.State>;

    constructor(private store: Store<fromStore.StoreState>) {
        this.configState$ = this.store.select(state => state.config);
        this.sidebarState$ = this.store.select(state => state.sidebar);
        this.rightSidebarState$ = this.store.select(state => state.sidebarRight);
        this.i18nState$ = this.store.select(state => state.i18n);
        this.homePanelsState$ = this.store.select(state => state.homePanel);
        this.pageState$ = this.store.select(state => state.page);
    }
    /**
     * Resets the Store State
     */
    resetStoreState(): void {
        this.store.dispatch(new StoreActions.ClearState());
    }

    /*
     * CONFIG state functions
     */
    setConfig(config: StoreConfig): void {
        this.store.dispatch(new ConfigActions.SetConfig(config));
    }

    /*
     * SIDEBAR state functions
     */
    toggleSidebar(): void {
        this.store.dispatch(new SidebarActions.Toggle());
    }
    setHasSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new SidebarActions.SetHasSidebar(hasSidebar));
    }
    setSidebarMode(mode: string): void {
        this.store.dispatch(new SidebarActions.SetMode(mode));
    }
    setSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new SidebarActions.SetCollapsible(collapsible));
    }
    setSidebarOpened(opened: boolean): void {
        this.store.dispatch(new SidebarActions.SetOpened(opened));
    }
    setSidebarTitle(title: string): void {
        this.store.dispatch(new SidebarActions.SetTitle(title));
    }
    setSidebarSelectedModule(module: string): void {
        this.store.dispatch(new SidebarActions.SetSelectedModule(module));
    }
    /*
    * Right SIDEBAR state functions
    */
    toggleRightSidebar(): void {
        this.store.dispatch(new RightSidebarActions.Toggle());
    }
    setHasRightSidebar(hasSidebar: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetHasSidebar(hasSidebar));
    }
    setRightSidebarMode(mode: string): void {
        this.store.dispatch(new RightSidebarActions.SetMode(mode));
    }
    setRightSidebarCollapsible(collapsible: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetCollapsible(collapsible));
    }
    setRightSidebarOpened(opened: boolean): void {
        this.store.dispatch(new RightSidebarActions.SetOpened(opened));
    }
    setRightSidebarTitle(title: string): void {
        this.store.dispatch(new RightSidebarActions.SetTitle(title));
    }
    setRightSidebarSelectedModule(module: string): void {
        this.store.dispatch(new RightSidebarActions.SetSelectedModule(module));
    }
    // i18n language
    setLanguage(language: string): void {
      this.store.dispatch(new i18nActions.SetLanguage(language));
    }
    // homepanels state
    setHomePanelOpen(open: boolean): void {
      this.store.dispatch(new homePanelActions.SetOpen(open));
    }
    setHomePanelMulti(multi: boolean): void {
      this.store.dispatch(new homePanelActions.SetMulti(multi));
    }
    setHomePanelToggle(toggle: boolean): void {
      this.store.dispatch(new homePanelActions.SetToggle(toggle));
    }
    // page state
    setPageProgram(program: Page): void {
      this.store.dispatch(new PageActions.SetPageProgramContent(program));
    }
    setPageResource(resource: Page): void {
      this.store.dispatch(new PageActions.SetPageResourceContent(resource));
    }
}
