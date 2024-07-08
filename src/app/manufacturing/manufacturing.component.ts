import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss'
})
export class ManufacturingComponent {
  data: any [] = [];

  constructor(private dataService: DataService){
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
      
    })
  }

}
