import * as I18nActions from './i18n.actions';

export interface State {
  currentLanguage: string;
}

const initialState: State = {
  currentLanguage: 'en'
};

export function i18nReducer(
  state = initialState,
  action: I18nActions.I18nActions
) {
  switch (action.type) {
    case I18nActions.SET_LANGUAGE:
      return { ...state, currentLanguage: action.payload };
    default:
      return state;
  }
}
