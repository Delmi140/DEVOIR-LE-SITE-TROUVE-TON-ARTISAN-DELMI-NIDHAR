import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

  data: any [] = [];

  constructor(private dataService: DataService){
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
     
    })
  }

}
