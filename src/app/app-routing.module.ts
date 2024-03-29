import { RoleGuard } from './guards/role.guard';
import { NotauthGuard } from './guards/notauth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';
import { ConfproductoComponent } from './modules/productos/confproducto/confproducto.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { ConfiRolesComponent } from './modules/roles/confi-roles/confi-roles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewComponent } from './dashboard/view/view.component';
import { ConfmarcasComponent } from './modules/marca/confmarcas/confmarcas.component';
import { MarcaComponent } from './modules/marca/marca.component';
import { ConfcategoriaComponent } from './modules/categorias/confcategoria/confcategoria.component';
import { RolesComponent } from './modules/roles/roles.component';
import { CategoriasComponent } from './modules/categorias/categorias.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { BodyComponent } from './dashboard/body/body.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dashboard/dash/dash.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ConfclienteComponent } from './modules/clientes/confcliente/confcliente.component';
import { CompraComponent } from './modules/compra/compra.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full",
  },
  { path: 'login', component: LoginComponent, canActivate: [NotauthGuard] },
  {
    path:'home', component: ViewComponent,
    children: [
      { path: 'dashboard', component: DashComponent, canActivate: [AuthGuard] },
      { path: 'roles', component: RolesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: '1'}},
      { path: 'roles/configuracion/:id_tipousuario', component: ConfiRolesComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'categorias/configuracion/:id_categoria', component: ConfcategoriaComponent},
      { path: 'marcas', component: MarcaComponent },
      { path: 'marcas/configuracion/:id_marca', component: ConfmarcasComponent },
      { path: 'clientes', pathMatch: 'full',  component: ClientesComponent },
      { path: 'clientes/configuracion/:id_cliente', component: ConfclienteComponent },
      { path: 'proveedores', pathMatch: 'full',  component: ProveedorComponent },
      { path: 'proveedores/configuracion/:id_proveedor', component: ConfclienteComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'productos/configuracion/:id_producto', component: ConfproductoComponent },
      { path: 'compra', component: CompraComponent },  
      { path: 'ventas', component: VentasComponent }
    ]
  },
  { path: '**', pathMatch: 'full',  component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
