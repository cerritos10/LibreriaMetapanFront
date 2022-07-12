import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css','../../../assets/css/forms.css']
})
export class ProveedorComponent implements OnInit {
  nombre = null;
  direccion = null;
  telefono = null;
  proveedores = null;

  constructor(private restService:RestServiceService) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(){
    this.restService.getAllProveedores().subscribe(data => {
      this.proveedores = data['data']
    })
  }

  insertProveedor(){
    var prov ={
      nombre: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono
    };
    this.restService.postProveedores(prov).subscribe(data => {
      console.log(data['Message']);
      location.reload();
    });
  }

}
