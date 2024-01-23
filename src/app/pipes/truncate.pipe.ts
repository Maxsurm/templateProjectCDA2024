import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 15, symbol: string = " ..."): string {
    return value.substring(0, limit || 30) + (value.length > limit ? symbol : '');
  }

}
