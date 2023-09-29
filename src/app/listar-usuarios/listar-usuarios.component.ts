import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  

  usuariosLista:any = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.userService.obtenerUsuarios().subscribe(
      (data: any) => {
        console.log(data);
        this.usuariosLista = data?.data;
      }
    );
  }

  eliminarUsuario(id: any) {
    
    Swal.fire({ 
      title: '¿Estas seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33', 
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.eliminarUsuario(id).subscribe(
          (data: any) => {
            console.log(data);
            this.obtenerUsuarios();
          }
        );
        Swal.fire(
          'Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        )
      }
    })
  

  }

}
