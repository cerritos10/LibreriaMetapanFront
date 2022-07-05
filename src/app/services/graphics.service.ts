import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  URL = 'http://127.0.0.1:3000/api/'

  public Stock(path){
    return this.http.get(this.URL + path);
  }
}
