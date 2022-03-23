import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-confcategoria',
  templateUrl: './confcategoria.component.html',
  styleUrls: ['./confcategoria.component.css']
})
export class ConfcategoriaComponent implements OnInit {

  constructor(private restService:RestServiceService,  private activeRoute:ActivatedRoute, private router: Router) { }

  categorias = null;
  elId;

  ngOnInit(): void {
    this.elId=this.activeRoute.snapshot.paramMap.get('id_categoria');
    this.obtenerCategoria(this.elId);
  }

  obtenerCategoria(Id):void{
    this.restService.getCategoria(this.elId).subscribe(data=>{
      this.categorias = data['data'];
      console.log(data);
    })
  }

  editCate(){
    var cate = {
      nombre_categoria: this.categorias[0]['nombre_categoria']
    };
    this.restService.putCategorias(cate, this.elId).subscribe(data=>{
      console.log(data['Message']);
      this.router.navigate(['/categorias']);
    })
  }

  eliminarCate(){
    this.restService.deleteCategorias(this.elId).subscribe(data=>{
      console.log(data['Status']);
      this.router.navigate(['/categorias']);
    })
  }

}
