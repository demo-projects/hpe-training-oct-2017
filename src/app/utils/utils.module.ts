import { LoggerService } from './logger.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowPipe } from './low.pipe';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [CommonModule],
  providers: [LoggerService],
  declarations: [LowPipe, TooltipDirective],
  exports: [LowPipe, TooltipDirective],
})
export class UtilsModule { }
