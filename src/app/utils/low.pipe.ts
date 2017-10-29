import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'low'
})
export class LowPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.toLowerCase();
  }

}
