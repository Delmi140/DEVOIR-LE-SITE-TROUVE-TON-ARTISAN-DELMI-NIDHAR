import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrl: './building.component.scss'
})
export class BuildingComponent implements OnInit{


  Filtername: string ='';

  

  


 

  datas: any [] = [];



  constructor(private http: HttpClient , private dataService: DataService){

    
   
   


    
    
    
  }
  ngOnInit(): void {

   this.dataService.getArtisans().subscribe(data =>(this.datas = data))
    
    
  }

}
