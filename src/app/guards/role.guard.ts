import { Injectable } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private restService:RestServiceService, private router:Router) { }

  canActivate(Router: ActivatedRouteSnapshot) : boolean{
    const expectedRole = Router.data.expectedRole;

    const token = localStorage.getItem('token');

    const { id_tipousuario }: any = decode(token);

    if(!this.restService.isAuth()){
      console.log("El token no es válido o ya expiró");
      this.router.navigateByUrl('login');
      return false;
    }else{
      if(id_tipousuario == expectedRole){
        return true;
      }else{
        console.log("Usuario no autorizado para ver la vista");
        this.router.navigateByUrl('home/dashboard');
        return false;
      }
    }
  }

}
