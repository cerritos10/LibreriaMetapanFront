import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';
interface Sex {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css', '../../../assets/css/forms.css']
})
export class ClientesComponent implements OnInit {

  constructor(private resService:RestServiceService) { }

  //Datos que se enviaran en el post
  cliente = null;
  telefono = null;
  sexo = null;

  //Objeto que se llena al momento de hacer el get
  clientes = null;

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente()
  {
    this.resService.getClientesAll().subscribe(data => {
      this.clientes = data['data'];
      console.log(data);
    })
  }

  //Select
  sexClients: Sex[] = [
    {value: 'Masculino', viewValue: 'Masculino'},
    {value: 'Femenino', viewValue: 'Femenino'},
  ];

  addClient()
  {
    var client = {
      nombre: this.cliente,
      telefono: this.telefono,
      sexo: this.sexo
    }

    this.resService.postClientes(client).subscribe(data => {
      console.log(data['Message']);
      location.reload();
    })
  }
}
