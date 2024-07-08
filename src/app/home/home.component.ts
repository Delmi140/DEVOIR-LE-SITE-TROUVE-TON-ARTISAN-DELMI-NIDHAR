import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnChanges{

  public starWidth: number | undefined;

  public rating: number = 2;

  ngOnChanges(): void {
    this.starWidth = this.rating * 125 / 5;
  }

  data: any ;

  url = '../../assets/datas.json'

  constructor(private http: HttpClient){
    
    
  }
  
  ngOnInit(): void {
    
    this.http.get<any>(this.url).subscribe(res =>{
      this.data = res;
      this.data[0]
    


    })
  }


}

