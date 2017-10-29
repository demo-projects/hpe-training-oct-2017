import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowPipe } from './low.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LowPipe],
  exports: [LowPipe],
})
export class UtilsModule { }
