import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapTileViewComponent } from './basemap-tile-view.component';

describe('BasemapTileViewComponent', () => {
  let component: BasemapTileViewComponent;
  let fixture: ComponentFixture<BasemapTileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasemapTileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemapTileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
