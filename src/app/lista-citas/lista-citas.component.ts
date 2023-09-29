import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../service/user-service.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormmularioUsuarioComponent } from '../formmulario-usuario/formmulario-usuario.component';
import { AgendarCitasComponent } from '../agendar-citas/agendar-citas.component';
import { Subscription } from 'rxjs';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit, OnDestroy{


  private subscription: Subscription = new Subscription();

  lista:any = [];
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private utilService: UtilService
  ) { }
  ngOnDestroy(): void {
    
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.obtenerDatos();

    this.subscription = this.utilService.observable.subscribe(
      (data: any) => {
        console.log(data);
        this.obtenerDatos();
      }
    );
  }


  obtenerDatos() {
    this.userService.obtenerCitass().subscribe(
      (data: any) => {
        console.log(data);
        this.lista = data?.data;
      }
    );
  }


  nuevaCita() {

    this.modalService.open(AgendarCitasComponent, { size: 'md' });
  }
}
