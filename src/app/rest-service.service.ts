import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private http: HttpClient, private JwtHelper: JwtHelperService) { }

  URL = 'http://127.0.0.1:3000/api/'

  //Roles
  public getRol(id){
    return this.http.get(this.URL + 'roles/' + id);
  }

  public getAllRoles(){
    return this.http.get(this.URL + 'roles/');
  }

  public postRoles(data){
    return this.http.post(this.URL + 'roles/', data);
  }

  public putRoles(data, id){
    return this.http.put(this.URL + 'roles/' + id, data);
  }

  public deleteRoles(id){
    return this.http.delete(this.URL + 'roles/'+ id);
  }

  //Proveedores
  public getProveedores(id){
    return this.http.get(this.URL + 'proveedores/' + id);
  }

  public getAllProveedores(){
    return this.http.get(this.URL + 'proveedores/');
  }

  public postProveedores(data){
    return this.http.post(this.URL + 'proveedores/', data);
  }

  public putproveedores(data, id){
    return this.http.put(this.URL + 'proveedores/' + id, data);
  }

  public deleteProveedores(id){
    return this.http.delete(this.URL + 'proveedores/'+ id);
  }



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

  //Productos
  public getProductos(){
    return this.http.get(this.URL + 'productos/');
  }

  public getProducto(id){
    return this.http.get(this.URL + 'productos/' + id);
  }

  public postProducto(data){
    return this.http.post(this.URL + 'productos/', data);
  }

  public putProducto(data, id){
    return this.http.put(this.URL + 'productos/' + id, data);
  }

  public deleteProducto(id){
    return this.http.delete(this.URL + 'productos/' + id);
  }

  //Auth
  public login(data){
    return this.http.post(this.URL + 'users/login/', data);
  }

  ///npm install --save @auth0/angular-jwt
  isAuth(): boolean{
    const token = localStorage.getItem('token');
    if(this.JwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }else{
      return true;
    }
  }

}
