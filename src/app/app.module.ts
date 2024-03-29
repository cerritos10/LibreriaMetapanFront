import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BodyComponent } from './dashboard/body/body.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { AppRoutingModule } from './app-routing.module';
import { RolesComponent } from './modules/roles/roles.component';
import { CategoriasComponent } from './modules/categorias/categorias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { ConfcategoriaComponent } from './modules/categorias/confcategoria/confcategoria.component';
import { MarcaComponent } from './modules/marca/marca.component';
import { ConfmarcasComponent } from './modules/marca/confmarcas/confmarcas.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { ConfclienteComponent } from './modules/clientes/confcliente/confcliente.component';
import { ViewComponent } from './dashboard/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfiRolesComponent } from './modules/roles/confi-roles/confi-roles.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { ConfiproveedorComponent } from './modules/proveedor/confiproveedor/confiproveedor.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ConfproductoComponent } from './modules/productos/confproducto/confproducto.component';
import { CompraComponent } from './modules/compra/compra.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { LoginComponent } from './modules/login/login.component';

//Prividers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashComponent,
    RolesComponent,
    CategoriasComponent,
    ConfcategoriaComponent,
    MarcaComponent,
    ConfmarcasComponent,
    ClientesComponent,
    ConfclienteComponent,
    ViewComponent,
    PageNotFoundComponent,
    ConfiRolesComponent,
    ProveedorComponent,
    ConfiproveedorComponent,
    ProductosComponent,
    ConfproductoComponent,
    CompraComponent,
    VentasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    //Permite decodificar y decodificar los token para comprobar si es valido el token
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    //Interceptor
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
