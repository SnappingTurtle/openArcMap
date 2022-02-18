import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MainUiEffects } from './main-ui.effects';

describe('MainUiEffects', () => {
  let actions$: Observable<any>;
  let effects: MainUiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MainUiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MainUiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
