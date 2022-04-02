import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css', '../../../assets/css/forms.css']
})
export class RolesComponent implements OnInit {

  roles= null;
  role = null;

  constructor(private restService:RestServiceService) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){
    this.restService.getAllRoles().subscribe(data => {
      this.roles = data['data'];
    })
  }

  insertRol(){
    var r = {
      rol: this.role
    }
    this.restService.postRoles(r).subscribe(data => {
      console.log(data['Message']);
      location.reload();
    })
  }

}
