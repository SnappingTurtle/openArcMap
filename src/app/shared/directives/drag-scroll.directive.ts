import { Directive, ElementRef, Renderer2, NgZone, OnDestroy, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable, Subject, fromEvent } from 'rxjs';
import { switchMap, map, takeUntil, tap, mapTo, merge } from 'rxjs/operators';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Directive({
  selector: '[eValDragScroll]'
})
export class DragScrollDirective implements AfterViewInit, OnDestroy {

  @Output() isAtBottom = new EventEmitter<boolean>();
  @Input() scrollPageSize: number = 170;
  // @Output() isAtBottom: Observable<string>
  // @Input() mousedrag: Observable<boolean>;

  position;
  pos;
  host: HTMLElement;
  self: DragScrollDirective;

  scrollContainer: HTMLElement; // todo, add an input to specify the thing to allow dragscroll
  tileHolder: HTMLElement; // this is the container holding the full list of tiles ie the content
  private delta = {x: 0, y: 0}; // change in position on mouse move
  private isBottom: boolean;

  private currentScrollPosition = {left: 0, top: 0};
  private startMousePosition = {x: 0, y:0};

  private destroy$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone,
  ) {
      this.scrollContainer = el.nativeElement as HTMLElement;

      // renderer.setStyle(this.scrollContainer, 'backgroundColor', 'blue');
      renderer.setStyle(this.scrollContainer, 'cursor', 'grab');
  }

  public ngAfterViewInit(): void {
    this.configureHostMouseScrolling();
    // this.configureHostPointerScrolling();
    this.tileHolder = document.getElementById('tile-holder');
  }

  // emit on destroy request to stop mouse streams
  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  private configureHostMouseScrolling() {
    // run outside of angular zone change detection for performance
  //  this.zone.runOutsideAngular( () => {
      let mousedown$ = fromEvent(this.scrollContainer, 'pointerdown');
      let mousemove$ = fromEvent(this.scrollContainer, 'pointermove');
      let mouseup$ = fromEvent(this.scrollContainer, 'mouseup');
      let pointerup$ = fromEvent(this.scrollContainer, 'pointerout')
      let scrollwheel$ = fromEvent(this.scrollContainer, 'wheel');

      let mousedrag$ = mousedown$.pipe(
        switchMap((e: PointerEvent) => {
          e.stopPropagation();
          
          e.preventDefault();
          // this.scrollContainer.setPointerCapture(e.pointerId);
          let startX = e.clientX;
          let startY = e.clientY;
          this.currentScrollPosition = {left: this.scrollContainer.scrollLeft, top: this.scrollContainer.scrollTop};
          this.startMousePosition = {x: e.clientX, y: e.clientY};
          this.setMouseDownStyle();
          
          return mousemove$.pipe(
           /*  tap( (e:MouseEvent) => {
              this.isBottom = (this.tileHolder.clientHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight);
            }), */
            map( (e: PointerEvent) => {
              e.stopPropagation();
              e.preventDefault(); // window ignore mouse move event
              this.delta = {x: e.clientX - this.startMousePosition.x, y: e.clientY - this.startMousePosition.y};
              return (this.tileHolder.clientHeight - this.scrollContainer.scrollTop <= this.scrollContainer.clientHeight + 3)
            }),
            takeUntil(pointerup$)
          )
        }),
        takeUntil(this.destroy$)  // do while mouse down
      ); // end of mousedrag observable

      scrollwheel$.subscribe((e: WheelEvent) => {
        console.log(e.clientX + '  from the mouse wheeeeeeeeeeeel');
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ' + this.scrollContainer.scrollTop);
        console.log(this.isBottom);
        console.log('tileHolder: ' + this.tileHolder.clientHeight);
        console.log('scrollContainer: ' + this.scrollContainer.clientHeight);
        console.log('runner  ' + (this.tileHolder.clientHeight - this.scrollContainer.scrollTop))
        this.isBottom = (this.tileHolder.clientHeight - this.scrollContainer.scrollTop <= (this.scrollContainer.clientHeight + 3));
        this.isAtBottom.emit(this.isBottom);
      });

      // instance properties set in source but other stuff to do
      mousedrag$.subscribe((e) => {
        this.isAtBottom.emit(e);
        // if no change, just return - do I need this?
        
        if (this.delta.x === 0 && this.delta.y === 0) {
          return;
        }

        if (this.tileHolder.clientHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight) {
          console.log('bottom');
        }
        // otherwise move stuff
        console.log('coolscroll: ============================ left: ' + this.scrollContainer.scrollLeft + "  top: " + this.scrollContainer.scrollTop);
        // now scroll 
        this.scrollContainer.scrollLeft = this.currentScrollPosition.left - this.delta.x;
        this.scrollContainer.scrollTop = this.currentScrollPosition.top - this.delta.y;
      });

      mousedrag$.subscribe(() => {
        //console.log(this.isBottom);
        //this.isAtBottom.emit(this.tileHolder.clientHeight - this.scrollContainer.scrollTop === this.scrollContainer.clientHeight);
      })

      // danny$.subscribe(e => console.log('%%%%%%%%%%%%%%%%%%%%%%%   ' + e));

      mouseup$.subscribe(() => {
        this.renderer.setStyle(this.scrollContainer, 'cursor', 'grab');
        console.log("----------  " + this.scrollContainer.clientHeight)
      }) 
    //} //end of zone exclusion block

    //)
  }

  private configureHostPointerScrolling() {
    let pointerover$ = fromEvent(this.scrollContainer, 'pointerover');
    let pointerenter$ = fromEvent(this.scrollContainer, 'pointerenter');
    pointerover$.subscribe((e) => {
      console.log('over');
    });

    let pointermove$ = fromEvent(this.scrollContainer, 'pointermove');
    pointermove$.subscribe((e: PointerEvent) => {
      console.log('pointer : ' + e.clientX);
      e.stopPropagation();
      e.preventDefault(); // window ignore mouse move event
      this.delta = {x: e.clientX - this.startMousePosition.x, y: e.clientY - this.startMousePosition.y};
      this.scrollContainer.scrollLeft = this.currentScrollPosition.left - this.delta.x;
      this.scrollContainer.scrollTop = this.currentScrollPosition.top - this.delta.y;
      // return (this.tileHolder.clientHeight - this.scrollContainer.scrollTop <= this.scrollContainer.clientHeight + 3)
    })
  }

  /* initDragHandler() {
    this.position = { top: 0, left: 0, x: 0, y: 0 };

  } */

  setCustomAttributes() {
    
  }

  setMouseDownStyle() {
    this.renderer.setStyle(this.scrollContainer, 'cursor', 'move');
    this.renderer.setStyle(this.scrollContainer, 'user-select', 'none'); // no selection of text
    this.renderer.setStyle(this.scrollContainer, 'user-drag', 'none'); // no drag selection of images
  }

  setMouseUpStyle() {
    this.renderer.setStyle(this.scrollContainer, 'cursor', 'grab');
    this.renderer.setStyle(this.scrollContainer, 'user-select', 'initial');
  }

  /* mouseDownHandler(e, comp): void {
    return;
    console.log('mouse down: ' + e.clientX + ':' + e.clientY);
    // comp.renderer.setStyle(this.host, 'cursor', 'move');
    // comp.renderer.setStyle(this.host, 'user-select', 'none');
    // comp.renderer.setStyle(this.host, 'user-drag', 'none');
    // reposition
    this.position = {
      left: this.host.scrollLeft,
      top: this.host.scrollTop,
      x: e.clientX,
      y: e.clientY
    };
    // set handlers to track and/or complete drag
    const myfunc = (e) => { 
      console.log('------------------------- ' + e.clientY);
      this.mouseMoveHandler(e, comp);
    }
    this.host.addEventListener('mousemove', myfunc);
    this.host.addEventListener('mouseup', (e) => {
      this.host.removeEventListener('mousemove', myfunc);
      this.renderer.setStyle(this.host, 'cursor', 'grab');
      this.renderer.setStyle(this.host, 'user-select', 'initial');
    });
  } */

 /*  mouseMoveHandler(e: MouseEvent, comp: DragScrollDirective) {
    e.stopPropagation();
    // e.preventDefault();
    const deltax = e.clientX - this.position.x;
    const deltay = e.clientY - this.position.y;
    console.log('move delta: ' + deltax + ':' + deltay);
    // set the scroll postion
    this.host.scrollLeft = this.position.left - deltax;
    this.host.scrollTop = this.position.top - deltay;
  } */

  /* mouseUpHandler(e) {
    this.renderer.setStyle(this.host, 'cursor', 'grab');
    // this.host.removeEventListener('mousemove')
  } */

}
