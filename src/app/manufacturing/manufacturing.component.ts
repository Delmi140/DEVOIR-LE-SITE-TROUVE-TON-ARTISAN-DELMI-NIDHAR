import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss'
})
export class ManufacturingComponent implements OnInit{


  Filtername: string ='';

  

  


 

  datas: any [] = [];



  constructor(private dataService: DataService){

    
   
   


    
    
    
  }
  ngOnInit(): void {

   this.dataService.getArtisans().subscribe(data =>(this.datas = data));
   this.dataService.searchSubject.subscribe((searchString:any) => {
    this.Filtername = searchString;
   })
    
    
  }

}
