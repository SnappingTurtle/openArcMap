import { Component, OnInit, Input, AfterViewInit, NgZone, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile'
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import Projection from 'ol/proj/Projection';
import { get as GetProjection } from "ol/proj";
import OSM from 'ol/source/OSM';
import { ScaleLine, defaults as DefaultControls } from 'ol/control';

import { Store, select } from '@ngrx/store';
import { MapState } from './store/reducer/map.reducer';
import { toggleBasemapWidget, toggleSearchWidget, toggleLayerWidget, toggleDataGridWidget } from './store/actions/map.actions';

import { MapStore, MapActions, MapSelectors } from './store'
import { Observable } from 'rxjs';

@Component({
  selector: 'inno-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {

  @Input() centre: Coordinate;
  @Input() zoom: number;
  @Output() mapReady = new EventEmitter<Map>()

  map: Map;
  view: View;
  projection: Projection;

  extent: Extent = [-20026376.39, -20048966.1, 20026376.39, 20048966.1];

  basemapGalleryState: boolean;

  sidebarWidth = '400';
  openOffset = '0';
  hideLeftWidth = '-400';

  danny$: Observable<boolean>;
  leftSidebarState$: Observable<string>;

  constructor(
    private zone: NgZone,
    private changeDetector: ChangeDetectorRef,
    private store: Store<MapState>
  ) {
    this.danny$ = this.store.pipe(select(MapSelectors.getBasemapGalleryState));
      /* .subscribe((galleryState) => {
        this.basemapGalleryState = galleryState;
      }) */
    this.leftSidebarState$ = this.store.pipe(select(MapSelectors.getLeftSidebarState));
    this.leftSidebarState$.subscribe((a) => {
      alert('jiminy fucking cricket');
    })
  }

  ngAfterViewInit(): void {
    if (!this.map) {
      this.zone.runOutsideAngular( () => this.initMap());
    }
    setTimeout( () => this.mapReady.emit(this.map));
  }

  initMap(): void {
    proj4.defs(
      "EPSG:3857",
      "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs"
    );
    register(proj4);
    // create a projection with default extents
    this.projection = GetProjection("EPSG:3857");
    // this.projection.setExtent(this.extent);
    // create a view with center, zoom and projection
    this.view = new View({
      center: this.centre,
      zoom: this.zoom,
      projection: this.projection
    });
    // create a map with OSM base layer and new view
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM({})
        })
      ],
      target: "map-div",
      view: this.view,
      controls: DefaultControls().extend([new ScaleLine({})])
    });
  }

  onButtonBarToggleClick(e: any): void {

    switch(e) {
      case 'basemap':
        this.store.dispatch(toggleBasemapWidget());
        break;
      case 'search':
        this.store.dispatch(toggleSearchWidget());
        break;
      case 'layers':
        this.store.dispatch(toggleLayerWidget());
        break;
      case 'datagrid':
        this.store.dispatch(toggleDataGridWidget());
        break;

      }
  }

}
