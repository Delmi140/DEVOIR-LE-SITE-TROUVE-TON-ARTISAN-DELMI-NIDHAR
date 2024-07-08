import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss'
})
export class BuildingComponent {

  data: any [] = [];

  constructor(private dataService: DataService){
    
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
     
    })
  }

}
