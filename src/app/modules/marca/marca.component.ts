import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  constructor(private restService:RestServiceService) { }

  marca = null;
  marcas = null;

  ngOnInit(): void {
    this.getMarc();
  }

  insertMarc(){
    var marc = {
      nombre_marca: this.marca
    }

    this.restService.postMarcas(marc).subscribe(data=>{
      console.log(data['Message']);
      location.reload();
    });
  }

  getMarc(){
    this.restService.getAllMarcas().subscribe(data=>{
      this.marcas = data['data'];
      console.log(data);
    });
  }

}
