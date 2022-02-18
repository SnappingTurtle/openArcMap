import Projection from 'ol/proj/Projection';

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
