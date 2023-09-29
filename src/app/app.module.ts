import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavsComponent } from './navs/navs.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { FormmularioUsuarioComponent } from './formmulario-usuario/formmulario-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { PageUsuarioComponent } from './listar-usuarios/usuario/page-usuario/page-usuario.component';
import { PageCitaComponent } from './lista-citas/cita/page-cita/page-cita.component';


@NgModule({
  declarations: [
    AppComponent,
    NavsComponent,
    ListaCitasComponent,
    AgendarCitasComponent,
    FormmularioUsuarioComponent,
    ListarUsuariosComponent,
    PageUsuarioComponent,
    PageCitaComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
