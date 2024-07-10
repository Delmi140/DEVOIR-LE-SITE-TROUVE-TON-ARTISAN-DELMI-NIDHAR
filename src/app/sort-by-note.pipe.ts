import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByNote'
})
export class SortByNotePipe implements PipeTransform {

  transform(artisans: any[]): any [] {
    return artisans.sort((a:any, b:any) =>{
      if(a.note > b.note ) { return -1;}
      else if (a.note < b.note){ return 1;}
      else return 0;


    })
  }

}
