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
      {
        label: 'Lista de Usuarios',  routerLink: '/usuarios',
      },
      { label: 'Lista de Citas', routerLink: '/citas' },
    ];
  }
}
