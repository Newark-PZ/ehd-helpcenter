import * as HomePanelActions from './home-panels.actions';

export interface State {
  open: boolean;
  multi: boolean;
  toggleDisabled: boolean;
  categories: Array<{name: string; expanded: boolean}>;
  categoryName: string;
}

const initialState: State = {
  open: true,
  multi: true,
  toggleDisabled: false,
  categories: [
    {name: 'Information About COVID-19 Vaccines', expanded: false},
    {name: 'Save Lives. Stay Healthy. Safely Re-Open.', expanded: false},
    {name: 'Small Business', expanded: false},
    {name: 'Housing', expanded: false},
    {name: 'Employment & Wellness', expanded: false}
  ],
  categoryName: ''
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
    case HomePanelActions.SET_EXPANDED_CATEGORY:
      return {...state, categories: state.categories.map(cat => ({
        name: cat.name,
        expanded: cat.name === action.payload ? cat.expanded = !cat.expanded : cat.expanded
      }))};
    default:
      return state;
  }
}
