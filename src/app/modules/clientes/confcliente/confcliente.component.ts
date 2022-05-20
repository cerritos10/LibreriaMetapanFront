import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-confcliente',
  templateUrl: './confcliente.component.html',
  styleUrls: ['./confcliente.component.css', '../../../../assets/css/forms.css']
})
export class ConfclienteComponent implements OnInit {

  clientes = null;
  clID;

  constructor(private restService:RestServiceService, 
              private activeRoute:ActivatedRoute, 
              private router: Router) 
  { 

  }

  ngOnInit(): void {
    this.clID=this.activeRoute.snapshot.paramMap.get('id_cliente');
    this.getCliente(this.clID);
  }

  getCliente(Id):void{
    this.restService.getCliente(this.clID).subscribe(data => {
      this.clientes = data['data'];
      console.log(data);
    })
  }

  editCliente(){
    var client = {
      nombre: this.clientes[0]['nombre'],
      telefono: this.clientes[0]['telefono'],
      sexo: this.clientes[0]['sexo']
    }
    this.restService.putClientes(client, this.clID).subscribe(data => {
      console.log(data['Message']);
      this.router.navigate(['/home/clientes']);
    })
  }

  deleteClient(){
    this.restService.deleteClientes(this.clID).subscribe(data =>{
      console.log(data['status']);
      this.router.navigate(['/home/clientes']);
    })
  }
}
