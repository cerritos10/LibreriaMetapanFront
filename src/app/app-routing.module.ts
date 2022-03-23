import { ConfcategoriaComponent } from './modules/categorias/confcategoria/confcategoria.component';
import { RolesComponent } from './modules/roles/roles.component';
import { CategoriasComponent } from './modules/categorias/categorias.component';
import { BodyComponent } from './dashboard/body/body.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dashboard/dash/dash.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full",
  },
  { path: 'dashboard', component: DashComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'categorias/configuracion/:id_categoria', component: ConfcategoriaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
