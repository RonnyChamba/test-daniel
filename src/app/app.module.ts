import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavsComponent } from './navs/navs.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { AgendarCitasComponent } from './agendar-citas/agendar-citas.component';
import { FormmularioUsuarioComponent } from './formmulario-usuario/formmulario-usuario.component';


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
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
