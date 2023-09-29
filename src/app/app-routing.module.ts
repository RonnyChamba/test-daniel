import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUsuarioComponent } from './listar-usuarios/usuario/page-usuario/page-usuario.component';
import { PageCitaComponent } from './lista-citas/cita/page-cita/page-cita.component';

const routes: Routes = [
  { path: 'usuarios',  component: PageUsuarioComponent },
  { path: 'citas',  component: PageCitaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }