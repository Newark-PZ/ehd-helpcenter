import { Action } from '@ngrx/store';

export const SET_EXPANSION_OPEN = '[expansion] Set Expansion State';
export const SET_EXPANSION_MULTI = '[expansion] Set Expansion Multi Mode';
export const SET_EXPANSION_TOGGLE = '[expansion] Set Expansion Toggle Mode';
export const SET_EXPANDED_CATEGORY = '[expansion] Set Expanded Category';

export class SetOpen implements Action {
  readonly type = SET_EXPANSION_OPEN;
  constructor(public payload: boolean) {}
}
export class SetMulti implements Action {
  readonly type = SET_EXPANSION_MULTI;
  constructor(public payload: boolean) {}
}
export class SetToggle implements Action {
  readonly type = SET_EXPANSION_TOGGLE;
  constructor(public payload: boolean) {}
}
export class SetExpandedCategory implements Action {
  readonly type = SET_EXPANDED_CATEGORY;
  constructor(public payload: string) {}
}
export type HomePanelActions =
  | SetOpen
  | SetMulti
  | SetToggle
  | SetExpandedCategory;
