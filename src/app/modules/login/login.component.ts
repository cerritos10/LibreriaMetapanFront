import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../assets/css/forms.css']
})
export class LoginComponent implements OnInit {

  constructor(private restService:RestServiceService, private router:Router) { }

  username = null;
  password = null;

  ngOnInit(): void {
  }

  iniciarsesion(){
    var inicio = {
      username: this.username,
      password: this.password
    }

    this.restService.login(inicio).subscribe(data=>{
      console.log(data['Message']);
      if(data['Message'] == "El nombre de usuario no existe"){
        alert("El nombre de usuario no existe");
      }else if(data['Message'] == "La contraseña es incorrecta"){
        alert("El nombre de usuario no existe");
      }else if(data['Message'] == "El usuario es correcto"){
        console.log(data['token']);
        localStorage.setItem('token', data['token']);
        this.router.navigateByUrl('home/dashboard');
      }
    });
  }
}
