import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from '../map/map-view.component';
import { FabButtonBarComponent } from '../components/fab-button-bar/fab-button-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { BasemapTileViewComponent } from '../components/basemap-tile-view/basemap-tile-view.component';
import { StoreModule } from '@ngrx/store';
import * as fromMap from './store/reducer/map.reducer';
import { SharedModule } from '@oam/shared/shared.module';



@NgModule({
  declarations: [
    MapViewComponent,
    FabButtonBarComponent,
    BasemapTileViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    StoreModule.forFeature(fromMap.mapFeatureKey, fromMap.reducer),
  ],
  exports: [
    MapViewComponent,
    FabButtonBarComponent,
    SharedModule,
  ]
})
export class MapModule { }
