import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyAverage'
})
export class PropertyAveragePipe implements PipeTransform {

  transform(values: any[], attr: string): any {
    return values.reduce((a,b) => a + b[attr], 0);

  }

}
