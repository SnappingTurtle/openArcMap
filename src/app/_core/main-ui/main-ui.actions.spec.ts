import * as fromMainUi from './main-ui.actions';

describe('loadMainUis', () => {
  it('should return an action', () => {
    expect(fromMainUi.loadMainUis().type).toBe('[MainUi] Load MainUis');
  });
});
