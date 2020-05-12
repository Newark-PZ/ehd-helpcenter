import * as PageActions from './page.actions';
import { ProgramPage, ResourcePage } from 'src/app/shared/interfaces/other.interface';

export interface State {
  currentProgram?: ProgramPage;
  currentResource?: ResourcePage;
}

const initialState: State = {
  currentProgram: {title: '', subtitle: '', icon: 'people', introText: ''},
  currentResource: {title: '', icon: 'assessment'}
};

export function pageReducer(
  state = initialState,
  action: PageActions.PageActions
) {
  switch (action.type) {
    case PageActions.SET_PAGE_PROGRAM_CONTENT:
      return { ...state, currentProgram: action.payload };
    case PageActions.SET_PAGE_RESOURCE_CONTENT:
      return { ...state, currentResource: action.payload };
    default:
      return state;
  }
}
