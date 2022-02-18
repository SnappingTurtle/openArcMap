import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MapViewComponent } from './map/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';

// import { FabButtonBarComponent } from './components/fab-button-bar/fab-button-bar.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromState from './reducers';
import { MapModule } from './map/map.module';

// redux devtoos
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModule } from './shared/shared.module';
import * as fromMainUi from './_core/main-ui/main-ui.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MainUiEffects } from './_core/main-ui/main-ui.effects';

@NgModule({
  declarations: [
    AppComponent,
    // MapViewComponent,
    //FabButtonBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers }),
    MapModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(fromMainUi.mainUiFeatureKey, fromMainUi.reducer),
    // EffectsModule.forFeature([MainUiEffects]),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
