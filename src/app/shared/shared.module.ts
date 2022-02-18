import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragScrollDirective } from './directives/drag-scroll.directive';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [DragScrollDirective, LeftSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DragScrollDirective,
    LeftSidebarComponent
  ]
})
export class SharedModule { }
