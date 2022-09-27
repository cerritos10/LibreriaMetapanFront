import { Injectable } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private restService:RestServiceService, private router:Router) { }

  canActivate() : boolean{
    if(!this.restService.isAuth()){
      console.log('El token no es válido o ya expiró');
      this.router.navigateByUrl('login');
      return false
    }else{
      return true;
    }
  }

}
