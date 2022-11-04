import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cust'
})
export class CustPipe implements PipeTransform {

  transform(value: string): string {
    
    value = value?.split('').reverse().join('');
    return value;
  }

}
