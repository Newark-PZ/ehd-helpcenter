import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import * as fromConfig from './config/config.reducers';
import * as StoreActions from './store.actions';
import * as fromPage from './page/page.reducers';
import * as fromSidebar from './sidebar/sidebar.reducers';
import * as fromSidebarRight from './sidebarRight/sidebar.reducers';
import * as fromI18n from './i18n/i18n.reducers';
import * as fromHomePanels from './home-panels/home-panels.reducers';

export interface StoreState {
  config: fromConfig.State;
  sidebar: fromSidebar.State;
  sidebarRight: fromSidebarRight.State;
  i18n: fromI18n.State;
  homePanel: fromHomePanels.State;
  page: fromPage.State;
}

export const StoreReducers: ActionReducerMap<StoreState> = {
  config: fromConfig.configReducer,
  sidebar: fromSidebar.sidebarReducer,
  sidebarRight: fromSidebarRight.sidebarRightReducer,
  i18n: fromI18n.i18nReducer,
  homePanel: fromHomePanels.HomePanelReducer,
  page: fromPage.pageReducer
};

export function clearState(
  reducer: ActionReducer<StoreState>
): ActionReducer<StoreState> {
  return (
    state: StoreState,
    action: StoreActions.StoreActions
  ): StoreState => {
    switch (action.type) {
      case StoreActions.CLEAR_STATE:
        state = undefined;
        break;
      default:
        break;
    }
    return reducer(state, action);
  };
}
