import { LoggerService } from './logger.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LowPipe } from './low.pipe';
import { TooltipDirective } from './tooltip.directive';
import { IfDirective } from './if.directive';

@NgModule({
  imports: [CommonModule],
  providers: [LoggerService],
  declarations: [LowPipe, TooltipDirective, IfDirective],
  exports: [LowPipe, TooltipDirective, IfDirective],
})
export class UtilsModule { }
