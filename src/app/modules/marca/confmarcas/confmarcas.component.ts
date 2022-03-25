import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-confmarcas',
  templateUrl: './confmarcas.component.html',
  styleUrls: ['./confmarcas.component.css']
})
export class ConfmarcasComponent implements OnInit {

  constructor(private restService:RestServiceService,  private activeRoute:ActivatedRoute, private router: Router) { }

  marcas = null;
  elId;

  ngOnInit(): void {
    this.elId=this.activeRoute.snapshot.paramMap.get('id_marca');
    this.obtenerMarca(this.elId);
  }

  obtenerMarca(Id):void{
    this.restService.getMarca(this.elId).subscribe(data=>{
      this.marcas = data['data'];
      console.log(data);
    })
  }

  editMar(){
    var marc = {
      nombre_marca: this.marcas[0]['nombre_marca']
    };
    this.restService.putMarcas(marc, this.elId).subscribe(data=>{
      console.log(data['Message']);
      this.router.navigate(['/marcas']);
    })
  }

  deleteMar(){
    this.restService.deleteMarcas(this.elId).subscribe(data=>{
      console.log(data['Status']);
      this.router.navigate(['/marcas']);
    })
  }

}
