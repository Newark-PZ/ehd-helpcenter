import * as HomePanelActions from './home-panels.actions';

export interface State {
  open: boolean;
  multi: boolean;
  toggleDisabled: boolean;
}

const initialState: State = {
  open: true,
  multi: true,
  toggleDisabled: false
};

export function HomePanelReducer(
  state = initialState,
  action: HomePanelActions.HomePanelActions
) {
  switch (action.type) {
    case HomePanelActions.SET_EXPANSION_OPEN:
      return { ...state, open: action.payload };
    case HomePanelActions.SET_EXPANSION_MULTI:
      return { ...state, multi: action.payload };
    case HomePanelActions.SET_EXPANSION_TOGGLE:
      return { ...state, toggleDisabled: action.payload };
    default:
      return state;
  }
}
