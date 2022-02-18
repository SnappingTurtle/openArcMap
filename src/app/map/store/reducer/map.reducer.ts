import { Action, createReducer, on, Store } from '@ngrx/store';
import * as MapActions from '../actions/map.actions';
// import { MapState } from 'src/app/map/models/IMap';

export const mapFeatureKey = 'map';

export interface MapState {
  widgets: {
      basemapGalleryOn: boolean,
      searchControlOn: boolean,
      layerListOn: string,
      dataTableOn: boolean
  },
  // projection: Projection,
  // layers: Layer[]
  // latLongFormat: any

}

export const initialState: MapState = {
  widgets: {
    basemapGalleryOn: false,
    searchControlOn: false,
    layerListOn: 'closed',
    dataTableOn: false
},
};


export const mapReducer = createReducer(
  initialState,

  /* 
    reducers for button toggles simply return state plus widget
    state with that button state toggled
  */
  on(MapActions.toggleBasemapWidget, state => 
    ({...state, 
        widgets:  {
          ...state.widgets,
          basemapGalleryOn: !state.widgets.basemapGalleryOn
        }
      }
    )),
  on(MapActions.toggleSearchWidget, state =>
    ({...state.widgets,
        widgets: {
          ...state.widgets,
          searchControlOn: !state.widgets.searchControlOn
        }
      }
    )),
  on(MapActions.toggleLayerWidget, state =>
    ({...state,
        widgets: {
          ...state.widgets,
          layerListOn: (state.widgets.layerListOn === 'closed') ? 'open' : 'closed'
        }
      }
    )),

);

export function reducer(state: MapState | undefined, action: Action): any {
  return mapReducer(state, action);
}

