import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient) { }

  URL = 'http://127.0.0.1:3000/api/'

  ///Categorias
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

  ///Marcas
  public getMarca(id){
    return this.http.get(this.URL + 'marcas/' + id);
  }

  public getAllMarcas(){
    return this.http.get(this.URL + 'marcas/');
  }

  public postMarcas(data){
    return this.http.post(this.URL + 'marcas/', data);
  }

  public putMarcas(data, id){
    return this.http.put(this.URL + 'marcas/' + id, data);
  }

  public deleteMarcas(id){
    return this.http.delete(this.URL + 'marcas/'+ id);
  }

  //Clientes
  public getCliente(id){
    return this.http.get(this.URL + 'clientes/' + id);
  }

  public getClientesAll()
  {
    return this.http.get(this.URL + 'clientes/');
  }

  public postClientes(data)
  {
    return this.http.post(this.URL + 'clientes/', data);
  }

  public putClientes(data, id)
  {
    return this.http.put(this.URL + 'clientes/' + id, data);
  }

  public deleteClientes(id)
  {
    return this.http.delete(this.URL + 'clientes/' + id);
  }
}
