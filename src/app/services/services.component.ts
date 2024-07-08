import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  data: any [] = [];

  constructor(private dataService: DataService){
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
      
    })
  }

}
