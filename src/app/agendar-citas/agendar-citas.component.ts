import { Component } from '@angular/core';

@Component({
  selector: 'app-agendar-citas',
  templateUrl: './agendar-citas.component.html',
  styleUrls: ['./agendar-citas.component.css']
})
export class AgendarCitasComponent {
  selectedUserEmail: string = '';
  appointmentDate: string = '';
  selectedSpecialty: string = 'Medicina General';
  observation: string = '';
  appointmentNumber: string = '';

  searchUser() {
    // Implementa la lógica para buscar el usuario por su correo aquí
  }

  generateAppointmentNumber() {
    // Implementa la lógica para generar el número de cita aquí
  }

  onSubmit() {
    // Implementa la lógica para agendar la cita aquí
  }
}
