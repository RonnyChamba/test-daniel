import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavsComponent } from './navs/navs.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { FormmularioUsuarioComponent } from './formmulario-usuario/formmulario-usuario.component';

import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'inicio', component: FormmularioUsuarioComponent },
  { path: 'lista', component: ListaCitasComponent },
  { path: 'agendar', component: AgendarCitasComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    ListaCitasComponent,
    AgendarCitasComponent,
    FormmularioUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    RouterModule.forRoot(router),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
