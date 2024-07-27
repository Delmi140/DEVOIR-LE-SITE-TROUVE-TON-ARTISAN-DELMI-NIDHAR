import { Component,OnInit, } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})



export class FoodComponent implements OnInit{


  Filtername: string ='';

  

  


 

  datas: any [] = [];



  constructor(  private dataService: DataService){

    
   
   


    
    
    
  }
  ngOnInit(): void {

   this.dataService.getArtisans().subscribe(data =>(this.datas = data));
   this.dataService.searchSubject.subscribe((searchString:any) => {
    this.Filtername = searchString;
   })
    
    
  }

}
