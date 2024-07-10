import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{


  data: any ;

  datas: any [] = [];

  url = '../../assets/datas.json'

  constructor(private http: HttpClient , private dataService: DataService){
   
    this.dataService.getJsonData().subscribe((res: any) => {
      this.datas = res;
     
    })


    
    
    
  }
  ngOnInit(): void {
    
    this.http.get<any>(this.url).subscribe(res =>{
      this.data = res;
      this.data[0]
   

    })
  }

}

