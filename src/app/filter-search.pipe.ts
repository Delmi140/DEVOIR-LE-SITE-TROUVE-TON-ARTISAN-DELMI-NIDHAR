import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe  implements PipeTransform {

  transform(value: any, searchfilter: any): any {
    return value.filter((e:any) =>{
      return e.name.indexOf(searchfilter) > -1;

    })
  }
}