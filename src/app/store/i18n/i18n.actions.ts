import { Action } from '@ngrx/store';

export const SET_LANGUAGE = '[i18n] Set Current Language';

export class SetLanguage implements Action {
  readonly type = SET_LANGUAGE;
  constructor(public payload: string) {}
}

export type I18nActions =
  | SetLanguage;
