import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  URL = 'http://127.0.0.1:3000/api/'

  public getCategoria(id){
    return this.http.get(this.URL + 'categorias/' + id);
  }

  public getAllCategorias(){
    return this.http.get(this.URL + 'categorias/');
  }

  public postCategorias(data){
    return this.http.post(this.URL + 'categorias/', data);
  }

  public putCategorias(data, id){
    return this.http.put(this.URL + 'categorias/' + id, data);
  }

  public deleteCategorias(id){
    return this.http.delete(this.URL + 'categorias/'+ id);
  }
}
