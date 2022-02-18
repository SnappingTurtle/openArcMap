import * as fromMainUi from './main-ui.reducer';
import { selectMainUiState } from './main-ui.selectors';

describe('MainUi Selectors', () => {
  it('should select the feature state', () => {
    const result = selectMainUiState({
      [fromMainUi.mainUiFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
