import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { BasemapConfig } from '@map/config/basemapConfig';
import { IBasemap } from '@map/models/IMap';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'inno-basemap-tile-view',
  templateUrl: './basemap-tile-view.component.html',
  styleUrls: ['./basemap-tile-view.component.scss']
})
export class BasemapTileViewComponent implements OnInit {

  @ViewChild("tileScroller") tileScroller: ElementRef;
  @ViewChild("tileHolder") tileHolder: ElementRef;
  

  basemapDefs: Array<any> = BasemapConfig.basemaps;
  basemapSourceMap: Array<IBasemap> = BasemapConfig.olBasemapEndpoints;

  scrollTop = 0;
  isDraggable = false;
  scrollAtBottom: boolean = false;
  scrollAtTop: boolean = true;

  testObservable$: Observable<boolean>;

  scrollPageSize=150;

  constructor() { }

  ngOnInit(): void {
    
  }

  selectBasemap(basemapVO: IBasemap) {
    
  }

  scrollTiles(direction) {
    this.scrollTop = this.tileScroller.nativeElement.scrollTop;
    if (direction === 'up') {
      this.scrollTop -= this.scrollPageSize;
      if (this.scrollTop <= 0) {
        this.isAtTopHandler(true)
      } else {
        this.isAtTopHandler(false);
      }
    } else {
      this.scrollTop += this.scrollPageSize;
      if (this.scrollTop >= 1100) {
        this.isAtBottomHandler(true)
      } else {
        this.isAtBottomHandler(false);
      }
    }
    
    this.tileScroller.nativeElement.scrollTo({
      top: this.scrollTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  isAtBottomHandler(e) {
    this.scrollAtBottom = e;
    if (e === true) {
    }
  }

  isAtTopHandler(e) {
    this.scrollAtTop = e
  }

}
