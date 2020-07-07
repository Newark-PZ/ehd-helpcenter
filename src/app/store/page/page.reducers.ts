import * as PageActions from './page.actions';
import { Page, DocPage } from 'src/app/shared/interfaces/other.interface';

export interface State {
  currentProgram?: Page;
  currentResource?: Page;
  currentDoc?: DocPage;
}

const initialState: State = {
  currentProgram: {title: '', subtitle: '', icon: 'people', introText: '', hideBottomBar: false},
  currentResource: {title: '', subtitle: '', icon: 'assessment', introText: '', hideBottomBar: false},
  currentDoc: {title: '', icon: 'file'}
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
    case PageActions.SET_PAGE_DOC_CONTENT:
      return { ...state, currentDoc: action.payload };
    default:
      return state;
  }
}
