import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertysum'
})
export class PropertysumPipe implements PipeTransform {

  transform(value: any[], attr:string ): number {
    let result = value.reduce((a,b) => a + b[attr], 0);
    return result / value.length;
  }

}
