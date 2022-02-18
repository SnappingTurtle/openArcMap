import { createFeatureSelector, createSelector } from '@ngrx/store';


import * as MapStore from './reducer/map.reducer';
// import { MapState } from '../models/IMap'


export const mapState = createFeatureSelector<MapStore.MapState>(
    MapStore.mapFeatureKey,
);

export const getBasemapGalleryState = createSelector(
    mapState,
    (state: MapStore.MapState) => {
        return state.widgets.basemapGalleryOn;
    }
);

export const getLeftSidebarState = createSelector(
    mapState,
    (state: MapStore.MapState) => {
      alert('fuck');
        return state.widgets.layerListOn;  // test using layer list button to control left sidebar
    }
)
