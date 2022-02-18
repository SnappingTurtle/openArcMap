import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inno-fab-button-bar',
  templateUrl: './fab-button-bar.component.html',
  styleUrls: ['./fab-button-bar.component.scss']
})
export class FabButtonBarComponent implements OnInit {

  @Output() leftButtonBarToggleClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(tool: any): void {
    // alert(tool);
    this.leftButtonBarToggleClick.emit(tool);
  }

}
