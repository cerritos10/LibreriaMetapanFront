import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css', '../../../assets/css/forms.css']
})
export class ProductosComponent implements OnInit {

  constructor(private restService:RestServiceService) { }

  id_categoria = null;
  id_marca = null;
  nombre_producto = null;
  descripcion = null;
  stock = null;
  precio_venta = null;
  precio_descuento = null;

  //Consultas
  productos = null;
  categorias = null;
  marcas = null;

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias();
    this.getMarcas();
  }

  ///Consultar productos
  getProductos(){
    this.restService.getProductos().subscribe(data=>{
      this.productos = data['data'];
      console.log(data);
    });
  }

  ///Consultar categorias
  getCategorias(){
    this.restService.getAllCategorias().subscribe(data=>{
      this.categorias = data['data'];
      console.log(data);
    });
  }

  ///Consultar marcas
  getMarcas(){
    this.restService.getAllMarcas().subscribe(data=>{
      this.marcas = data['data'];
      console.log(data);
    });
  }

  //Insertar productos
  insertproducto(){
    var producto = {
      id_categoria: this.id_categoria,
      id_marca: this.id_marca,
      nombre_producto: this.nombre_producto,
      descripcion: this.descripcion,
      stock: this.stock,
      precio_venta: this.precio_venta,
      precio_descuento: this.precio_descuento
    }
    this.restService.postProducto(producto).subscribe(data=>{
      console.log(data['Message']);
      location.reload();
    });
  }
}
