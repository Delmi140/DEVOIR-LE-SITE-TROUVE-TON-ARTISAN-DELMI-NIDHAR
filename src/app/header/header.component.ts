import { Component , OnInit} from '@angular/core';
import { DataService } from '../data.service';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

 
  faMagnifyingGlass = faMagnifyingGlass;


  Filtername: string ='';



  constructor(  private dataService: DataService){

    
   

    
    
    
  }
  ngOnInit(): void {


    
    
  }

  searchName(Filtername : any){
    this.dataService.getSearchString(Filtername)
  }


}
