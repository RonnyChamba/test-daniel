import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formmulario-usuario',
  templateUrl: './formmulario-usuario.component.html',
  styleUrls: ['./formmulario-usuario.component.css'],
})
export class FormmularioUsuarioComponent {
  validacionUser: FormGroup;
  constructor(fb: FormBuilder) {
    this.validacionUser = fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z ]+$/),
        ],
      ],

      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z ]+$/),
        ],
      ],
      edad: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(150),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      foto: [''],
    });
  }
  user_validation_messages = {
    nombre: [
      { type: 'required', message: 'El nombre es requerido' },
      {
        type: 'minlength',
        message: 'El nombre debe tener al menos 2 caracteres',
      },
      {
        type: 'maxlength',
        message: 'El nombre no puede tener mas de 50 caracteres',
      },
      { type: 'pattern', message: 'El nombre debe contener solo letras' },
    ],
    apellido: [
      { type: 'required', message: 'El apellido es requerido' },
      {
        type: 'minlength',
        message: 'El apellido debe tener al menos 2 caracteres',
      },
      {
        type: 'maxlength',
        message: 'El apellido no puede tener mas de 50 caracteres',
      },
      { type: 'pattern', message: 'El apellido debe contener solo letras' },
    ],
    edad: [
      { type: 'required', message: 'La edad es requerida' },
      { type: 'min', message: 'La edad minima es 0' },
      { type: 'max', message: 'La edad maxima es 150' },
      { type: 'pattern', message: 'La edad debe contener solo numeros' },
    ],
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'El email debe tener un formato valido' },
    ],
  };

  get nombreValido() {
    return (
      this.validacionUser.get('nombre')?.dirty &&
      this.validacionUser.get('nombre')?.touched
    );
  }
  get nombreNoValido() {
    return (
      this.validacionUser.get('codigo')?.invalid &&
      this.validacionUser.get('codigo')?.touched
    );
  }
  get apellidoValido() {
    return (
      this.validacionUser.get('apellido')?.dirty &&
      this.validacionUser.get('apellido')?.touched
    );
  }
  get apellidoNoValido() {
    return (
      this.validacionUser.get('apellido')?.invalid &&
      this.validacionUser.get('apellido')?.touched
    );
  }
  get edadValido() {
    return (
      this.validacionUser.get('edad')?.dirty &&
      this.validacionUser.get('edad')?.touched
    );
  }
  get edadNoValido() {
    return (
      this.validacionUser.get('edad')?.invalid &&
      this.validacionUser.get('edad')?.touched
    );
  }
  get emailValido() {
    return (
      this.validacionUser.get('email')?.dirty &&
      this.validacionUser.get('email')?.touched
    );
  }
  get emailNoValido() {
    return (
      this.validacionUser.get('email')?.invalid &&
      this.validacionUser.get('email')?.touched
    );
  }
  get fotoValido() {
    return (
      this.validacionUser.get('foto')?.dirty &&
      this.validacionUser.get('foto')?.touched
    );
  }
  get fotoNoValido() {
    return (
      this.validacionUser.get('foto')?.invalid &&
      this.validacionUser.get('foto')?.touched
    );
  }



   // para el boton de eliminar 
  // deletePedidos(id: string) {

    // let  pedidos = this.pedidos.find(item => item.id == id);
  //   Swal.fire({
  //     title: 'Esta seguro?',
  //     text:  `¿Esta seguro de eliminar el pedido con `,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Si,Eliminar',
  //     cancelButtonText: 'No, cancelar'
  //   }).then((result) => {
  //   if (result.isConfirmed) {
  //   this.pedidosService.deletePedidos(id)
      
  //       Swal.fire( 'Pedido eliminado',
  //       'El pedido ha sido eliminado con exito',
  //       'success');
  //     }
  //   });
  // }

}
