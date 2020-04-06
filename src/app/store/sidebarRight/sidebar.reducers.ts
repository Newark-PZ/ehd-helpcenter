import * as SidebarRightActions from './sidebar.actions';

export interface State {
  hasSidebar: boolean;
  opened: boolean;
  collapsible: boolean;
  title: string;
  mode: string;
  selectedModule?: string;
}

const initialState: State = {
  hasSidebar: true,
  collapsible: true,
  opened: false,
  title: null,
  mode: 'over',
  selectedModule: null
};

export function sidebarRightReducer(
  state = initialState,
  action: SidebarRightActions.SidebarRightActions
) {
  switch (action.type) {
    case SidebarRightActions.TOGGLE:
      return { ...state, opened: !state.opened };
    case SidebarRightActions.SET_HAS_SIDEBAR:
      return { ...state, hasSidebar: action.payload };
    case SidebarRightActions.SET_MODE:
      return { ...state, mode: action.payload };
    case SidebarRightActions.SET_COLLAPSIBLE:
      return { ...state, collapsible: action.payload };
    case SidebarRightActions.SET_OPENED:
      return { ...state, opened: action.payload };
    case SidebarRightActions.SET_TITLE:
      return { ...state, title: action.payload };
    case SidebarRightActions.SET_SELECTED_MODULE:
      return { ...state, selectedModule: action.payload };
    default:
      return state;
  }
}
