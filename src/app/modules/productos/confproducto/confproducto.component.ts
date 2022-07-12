import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-confproducto',
  templateUrl: './confproducto.component.html',
  styleUrls: ['./confproducto.component.css', '../../../../assets/css/forms.css']
})
export class ConfproductoComponent implements OnInit {

  constructor(private restService:RestServiceService,  private activeRoute:ActivatedRoute, private router: Router) { }

  //Consultas
  productos = null;
  categorias = null;
  marcas = null;

  elId;

  ngOnInit(): void {
    this.getCategorias();
    this.getMarcas();

    this.elId=this.activeRoute.snapshot.paramMap.get('id_producto');
    this.obtenerProducto(this.elId);
  }

  obtenerProducto(Id):void{
    this.restService.getProducto(this.elId).subscribe(data=>{
      this.productos = data['data'];
      console.log(data);
    })
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

  ///Editar producto
  editProd(){
    var prod = {
      id_categoria: this.productos[0]['id_categoria'],
      id_marca: this.productos[0]['id_marca'],
      nombre_producto: this.productos[0]['nombre_producto'],
      descripcion: this.productos[0]['descripcion'],
      stock: this.productos[0]['stock'],
      precio_venta: this.productos[0]['precio_venta'],
      precio_descuento: this.productos[0]['precio_descuento']
    };
    this.restService.putProducto(prod, this.elId).subscribe(data=>{
      console.log(data['Message']);
      this.router.navigate(['/home/productos']);
    })
  }

  //Eliminar producto
  eliminarProd(){
    this.restService.deleteProducto(this.elId).subscribe(data=>{
      console.log(data['Status']);
      this.router.navigate(['/home/productos']);
    })
  }
}
