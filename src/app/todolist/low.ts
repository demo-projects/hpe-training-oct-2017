import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'low'
})
export class LowPipe implements PipeTransform {

  public transform(value: string): string {
    return value.toLowerCase();
  }
}
