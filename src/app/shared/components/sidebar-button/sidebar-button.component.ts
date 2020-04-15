import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  shownStateTrigger,
  sidebarButtonStateTrigger
} from '../../animations';
import * as fromStore from '../../../store/store.reducers';
import * as SidebarActions from './../../../store/sidebar/sidebar.actions';
import * as RightSidebarActions from './../../../store/sidebarRight/sidebar.actions';
import * as i18nActions from './../../../store/i18n/i18n.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss'],
  animations: [sidebarButtonStateTrigger, shownStateTrigger]
})
export class SidebarButtonComponent {
  @Input() iconName;
  @Input() treeControl;
  sidebarOpened$: Observable<boolean>;
  sidebarRightOpened$: Observable<boolean>;

  constructor(private store: Store<fromStore.StoreState>, private translate: TranslateService) {
    this.sidebarOpened$ = this.store.select(state => state.sidebar.opened);
    this.sidebarRightOpened$ = this.store.select(state => state.sidebarRight.opened);
  }
  toggleSidebar() {
    this.store.dispatch(new SidebarActions.Toggle());
    this.treeControl.collapseAll();
  }
  toggleRightSidebar() {
    this.store.dispatch(new RightSidebarActions.Toggle());
  }
  switchLanguage(langAbbr) {
    this.translate.use(langAbbr);
    this.store.dispatch(new i18nActions.SetLanguage(langAbbr));
  }
}
