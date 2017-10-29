import { Logger } from './logger';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowPipe } from './low.pipe';

@NgModule({
  imports: [CommonModule],
  providers: [Logger],
  declarations: [LowPipe],
  exports: [LowPipe],
})
export class UtilsModule { }
