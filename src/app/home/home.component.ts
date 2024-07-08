import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data: any [] = [];

  constructor(private dataService: DataService){
    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res;
      
    })
  }

}
