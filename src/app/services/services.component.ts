import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{


  Filtername: string ='';

  

  


 

  datas: any [] = [];



  constructor(private http: HttpClient , private dataService: DataService){

    
   
   


    
    
    
  }
  ngOnInit(): void {

   this.dataService.getArtisans().subscribe(data =>(this.datas = data))
    
    
  }

}
