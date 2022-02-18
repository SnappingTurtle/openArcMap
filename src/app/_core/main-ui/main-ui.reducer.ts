import { Action, createReducer, on } from '@ngrx/store';
import * as MainUiActions from './main-ui.actions';

export const mainUiFeatureKey = 'mainUi';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(MainUiActions.loadMainUis, state => state),

);

