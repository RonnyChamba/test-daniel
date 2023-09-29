import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCitaComponent } from './page-cita.component';

describe('PageCitaComponent', () => {
  let component: PageCitaComponent;
  let fixture: ComponentFixture<PageCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCitaComponent]
    });
    fixture = TestBed.createComponent(PageCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
