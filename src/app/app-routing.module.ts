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
import { RouterModule, Routes } from '@angular/router';
import { ConfclienteComponent } from './modules/clientes/confcliente/confcliente.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full",
  },
  {path:'', component: ViewComponent,
  children: [
    { path: 'dashboard', component: DashComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'categorias', component: CategoriasComponent },
    { path: 'categorias/configuracion/:id_categoria', component: ConfcategoriaComponent},
    { path: 'marcas', component: MarcaComponent },
    { path: 'marcas/configuracion/:id_marca', component: ConfmarcasComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'clientes/configuracion/:id_cliente', component: ConfclienteComponent }
  ]  
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
