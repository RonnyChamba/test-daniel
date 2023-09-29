import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsuarioComponent } from './page-usuario.component';

describe('PageUsuarioComponent', () => {
  let component: PageUsuarioComponent;
  let fixture: ComponentFixture<PageUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageUsuarioComponent]
    });
    fixture = TestBed.createComponent(PageUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
