import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe  implements PipeTransform {

  transform(artisans: any [],Filtername: any): any {
    if (!Filtername) {
      return artisans;
    }
    return artisans.filter((artisan:any) => {
      return artisan.name.toLowerCase().includes(Filtername.toLowerCase()) || artisan.location.toLowerCase().includes(Filtername.toLowerCase()) || artisan.specialty.toLowerCase().includes(Filtername.toLowerCase());
    })
    
  }
}