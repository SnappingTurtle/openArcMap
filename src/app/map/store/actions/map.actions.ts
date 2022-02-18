import { createAction, props } from '@ngrx/store';
import { IGalleryStatus, ISearchWidgetStatus } from '../../models/IMap';

export enum WidgetActionTypes {
  TOGGLE_BASEMAPS = '[ToggleBasemapWidget] ToggleBasemapWidget',
  TOGGLE_SEARCH = '[ToggleSearchWidget] ToggleSearchWidget',
  TOGGLE_LAYERS = '[ToggleLayerWidget] ToggleLayerWidget',
  TOGGLE_DATAGRID = '[ToggleDataGridWidget] ToggleDataGridWidget'
}

// toggle type buttons have simple actions without properties

export const toggleBasemapWidget = createAction(
  WidgetActionTypes.TOGGLE_BASEMAPS
);

export const toggleSearchWidget = createAction(
  WidgetActionTypes.TOGGLE_SEARCH
);

export const toggleLayerWidget = createAction(
  WidgetActionTypes.TOGGLE_LAYERS
);

export const toggleDataGridWidget = createAction(
  WidgetActionTypes.TOGGLE_DATAGRID
);

export const toggleSearchWidget2 = createAction(
  '[ToggleSearchWidget] ToggleSearchWidget',
  props<ISearchWidgetStatus>()
);



/* export const loadOpenBasemapGallerysSuccess = createAction(
  '[OpenBasemapGallery] Load OpenBasemapGallerys Success',
  props<{ data: any }>()
);

export const loadOpenBasemapGallerysFailure = createAction(
  '[OpenBasemapGallery] Load OpenBasemapGallerys Failure',
  props<{ error: any }>()
); */
