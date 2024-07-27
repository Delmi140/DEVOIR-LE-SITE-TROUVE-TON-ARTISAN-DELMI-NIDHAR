import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Iartisan } from './artisan';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }

  Filtername: any = '';
  searchSubject = new Subject();

  getJsonData(){
    return this.http.get('../assets/datas.json')
}

 getArtisans():Observable<Iartisan[]>{
  return this.http.get<Iartisan[]>('../assets/datas.json')
 }

 getSearchString(Filtername : any){
  this.Filtername = Filtername;
  this.searchSubject.next(this.Filtername);

 }
  


}
