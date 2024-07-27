import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://0.0.0.0:1025/';

  constructor(private httpClient: HttpClient) { }

  createPost(data: any){
    return this.httpClient.post(this.url, data);
  }
}

