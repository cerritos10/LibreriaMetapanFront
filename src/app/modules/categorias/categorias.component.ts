import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private restService:RestServiceService) { }

  categoria = null;
  categorias = null;

  ngOnInit(): void {
    this.getCate();
  }

  insertCate(){
    var cate = {
      nombre_categoria: this.categoria
    }

    this.restService.postCategorias(cate).subscribe(data=>{
      console.log(data['Message']);
      location.reload();
    });
  }

  getCate(){
    this.restService.getAllCategorias().subscribe(data=>{
      this.categorias = data['data'];
      console.log(data);
    });
  }

}
