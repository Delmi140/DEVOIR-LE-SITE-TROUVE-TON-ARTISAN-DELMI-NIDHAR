import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss'
})
export class BuildingComponent implements OnInit{

  data: any ;

  url = '../../assets/datas.json'

  constructor(private http: HttpClient){
    
    
  }
  ngOnInit(): void {
    
    this.http.get<any>(this.url).subscribe(res =>{
      this.data = res;
      this.data[0]
    

      
      console.log(this.data)
      console.log(this.data[1])
      

   

    })
  }

}
