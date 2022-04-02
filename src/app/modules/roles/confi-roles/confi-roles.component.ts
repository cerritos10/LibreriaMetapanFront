import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-confi-roles',
  templateUrl: './confi-roles.component.html',
  styleUrls: ['./confi-roles.component.css', '../../../../assets/css/forms.css']
})
export class ConfiRolesComponent implements OnInit {

  roles = null;
  elId;

  constructor(
    private restService:RestServiceService,  
    private activeRoute:ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.elId=this.activeRoute.snapshot.paramMap.get('id_tipousuario');
    this.obtenerRol(this.elId);
  }

  obtenerRol(id){
    this.restService.getRol(this.elId).subscribe(data => {
      this.roles = data['data']; 
      console.log(data)
    })
  }

  editRol(){
    var rol = {
      rol: this.roles[0]['rol']
    };
    this.restService.putRoles(rol, this.elId).subscribe(data => {
      console.log(data['Message'])
      this.router.navigate(['home/roles']);
    })
  }

  deleteRol(){
    this.restService.deleteRoles(this.elId).subscribe(data => {
      this.router.navigate(['home/roles']);
    })
  }

}
