import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user-service.service';
import { tap } from 'rxjs';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent {

  usuario: any = null;
  validacioncitas: FormGroup;
  constructor(fb: FormBuilder,

    private utilService: UtilService,
    private userService: UserService) {



    this.validacioncitas = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
        ],
      ],
      fecha: ['', [Validators.required]],
      Especialidad: ['Medicina General', [Validators.required]],
      Obser: ['', [Validators.required]],
      numeroCita: ['', [Validators.required]],
    });
  }


  user_validation_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },

      {
        type: 'pattern',
        message: 'El email debe tener un formato valido',
      },
    ],
    fecha: [{ type: 'required', message: 'La fecha es requerida' }],
    Especialidad: [
      { type: 'required', message: 'La especialidad es requerida' },
    ],
    Obser: [{ type: 'required', message: 'La observación es requerida' }],
  };

  get emailValido() {
    return (
      this.validacioncitas.get('email')?.dirty &&
      this.validacioncitas.get('email')?.touched
    );
  }
  get emailNoValido() {
    return (
      this.validacioncitas.get('email')?.invalid &&
      this.validacioncitas.get('email')?.touched
    );
  }
  get fechaValido() {
    return (
      this.validacioncitas.get('fecha')?.dirty &&
      this.validacioncitas.get('fecha')?.touched
    );
  }
  get fechaNoValido() {
    return (
      this.validacioncitas.get('fecha')?.invalid &&
      this.validacioncitas.get('fecha')?.touched
    );
  }
  get EspecialidadValido() {
    return (
      this.validacioncitas.get('Especialidad')?.dirty &&
      this.validacioncitas.get('Especialidad')?.touched
    );
  }
  get EspecialidadNoValido() {
    return (
      this.validacioncitas.get('Especialidad')?.invalid &&
      this.validacioncitas.get('Especialidad')?.touched
    );
  }
  get ObserValido() {
    return (
      this.validacioncitas.get('Observación')?.dirty &&
      this.validacioncitas.get('Observación')?.touched
    );
  }
  get ObserNoValido() {
    return (
      this.validacioncitas.get('Observación')?.invalid &&
      this.validacioncitas.get('Observación')?.touched
    );
  }


  buscarUsuario() {
    this.userService.obtenerUsuarioPorEmail(this.validacioncitas.value.email)
      .pipe(
        tap((data: any) => {


          this.usuario = data?.data;
          console.log(this.usuario);;
          if (this.usuario) {
            console.log('Usuario encontrado');
            this.validacioncitas.patchValue({
              numeroCita: this.generarCodigoAleatorio()
            })


          } else alert('No se encontró el usuario');

        }

        ))
      .subscribe();
  }

  generarCodigoAleatorio(): number {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  guardarCita() {

    const fechaConvertida = this.convertirFecha(this.validacioncitas.value.fecha);

    const data = {

      fecha: fechaConvertida,
      especialidad: this.validacioncitas.value.Especialidad,
      observacion: this.validacioncitas.value.Obser,
      numeroCita: this.validacioncitas.value.numeroCita
    }


    console.log(data);
    // return;
    this.userService.guardarCita(data, this.usuario?.ide).subscribe(
      (data: any) => {
        console.log(data);
        alert('Cita guardada correctamente');
        this.validacioncitas.reset();
        this.usuario = null;

        this.utilService.observable.next(true);
      }
    );
  }

  convertirFecha(fecha: any) {


    // necesito convertir la fecha a un formato  YYYY-MM-DD HH:mm:ss

    const fechaConvertida = new Date(fecha);

    const dia = fechaConvertida.getDate();
    const mes = fechaConvertida.getMonth() + 1;
    const anio = fechaConvertida.getFullYear();
    const hora = fechaConvertida.getHours();
    const minutos = fechaConvertida.getMinutes();
    const segundos = fechaConvertida.getSeconds();

    return anio + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos + ':' + segundos;
  }


}

