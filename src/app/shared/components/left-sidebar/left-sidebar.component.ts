import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { leftSidebarSlide } from '@oam/shared/animations/left-sidebar-slide';

@Component({
  selector: 'eVal-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  animations: [leftSidebarSlide]
})
export class LeftSidebarComponent implements OnInit {

  @Input() sidebarWidth = '400';
  @Input() openOffset = '0';
  @Input() hideLeftWidth = '-200';
  @Input() sidebarDrawerState = 'closed';
  heightPercent = '50';
  // sidebarDrawerState = "open";
  constructor() { }

  ngOnInit(): void {
  }

}
