import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8001/api/usuarios';
  urlCitas = 'http://localhost:8001/api/citas';
  constructor(
    private http: HttpClient
  ) { }


  obtenerUsuarios() {
    return this.http.get(this.url);
  }

  eliminarUsuario(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

  obtenerCitass() {
    return this.http.get(this.urlCitas);
  }

  obtenerUsuarioPorEmail(valor: any) {
    return this.http.get(this.url + '/buscar', {
      params: {
        valor
      }
    })
  }

  guardarCita(data: any, idUsuario: any) {
    return this.http.post(this.url + '/' + idUsuario + '/cita', data);
  }
}
