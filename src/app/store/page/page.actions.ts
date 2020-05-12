import { Action } from '@ngrx/store';
import { ResourcePage, ProgramPage } from 'src/app/shared/interfaces/other.interface';

export const SET_PAGE_PROGRAM_CONTENT = '[Page] Set Current Program Page Content';
export const SET_PAGE_RESOURCE_CONTENT = '[Page] Set Current Resource Page Content';

export class SetPageProgramContent implements Action {
  readonly type = SET_PAGE_PROGRAM_CONTENT;
  constructor(public payload: ProgramPage) {}
}
export class SetPageResourceContent implements Action {
  readonly type = SET_PAGE_RESOURCE_CONTENT;
  constructor(public payload: ResourcePage) {}
}

export type PageActions =
  | SetPageProgramContent
  | SetPageResourceContent;
