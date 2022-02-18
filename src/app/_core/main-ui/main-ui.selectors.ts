import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMainUi from './main-ui.reducer';

export const selectMainUiState = createFeatureSelector<fromMainUi.State>(
  fromMainUi.mainUiFeatureKey
);
