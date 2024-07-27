import { Component , OnInit} from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{


  Filtername: string ='';



  constructor(  private dataService: DataService){

    
   

    
    
    
  }
  ngOnInit(): void {


    
    
  }

  searchName(Filtername : any){
    this.dataService.getSearchString(Filtername)
  }


}
