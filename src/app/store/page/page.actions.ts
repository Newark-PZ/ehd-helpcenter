import { Action } from '@ngrx/store';
import {Page, DocPage } from 'src/app/shared/interfaces/other.interface';

export const SET_PAGE_PROGRAM_CONTENT = '[Page] Set Current Program Page Content';
export const SET_PAGE_RESOURCE_CONTENT = '[Page] Set Current Resource Page Content';
export const SET_PAGE_DOC_CONTENT = '[Page] Set Current Doc Page Content';

export class SetPageProgramContent implements Action {
  readonly type = SET_PAGE_PROGRAM_CONTENT;
  constructor(public payload: Page) {}
}
export class SetPageResourceContent implements Action {
  readonly type = SET_PAGE_RESOURCE_CONTENT;
  constructor(public payload: Page) {}
}
export class SetPageDocContent implements Action {
  readonly type = SET_PAGE_DOC_CONTENT;
  constructor(public payload: DocPage) {}
}

export type PageActions =
  | SetPageProgramContent
  | SetPageResourceContent
  | SetPageDocContent;
