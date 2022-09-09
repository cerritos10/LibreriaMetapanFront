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
import { HttpClientModule } from '@angular/common/http';
import { ConfcategoriaComponent } from './modules/categorias/confcategoria/confcategoria.component';
import { MarcaComponent } from './modules/marca/marca.component';
import { ConfmarcasComponent } from './modules/marca/confmarcas/confmarcas.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { ConfclienteComponent } from './modules/clientes/confcliente/confcliente.component';
import { ViewComponent } from './dashboard/view/view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfiRolesComponent } from './modules/roles/confi-roles/confi-roles.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ConfproductoComponent } from './modules/productos/confproducto/confproducto.component';
import { CompraComponent } from './modules/compra/compra.component';

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
    ProductosComponent,
    ConfproductoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
