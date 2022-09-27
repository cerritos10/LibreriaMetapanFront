import { Injectable } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {

  constructor(private restService:RestServiceService, private router:Router) { }

  canActivate() : boolean{
    if(!this.restService.isAuth()){
      return true
    }else{
      console.log('Ya está autentificado no puede acceder al inicio de sesión');
      this.router.navigateByUrl('home/dashboard');
      return false;
    }
  }

}
