import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
})
export class NavsComponent {
  items: any[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Registro de Usuarios', routerLink: '/inicio' },
      {
        label: 'Lista de Usuarios',   routerLink: '/lista',
      },
      { label: 'Agendar Citas', routerLink: '/agendar' },
    ];
  }
}
