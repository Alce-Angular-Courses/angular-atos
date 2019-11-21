import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosServicioComponent } from './libros-servicio.component';

describe('LibrosServicioComponent', () => {
  let component: LibrosServicioComponent;
  let fixture: ComponentFixture<LibrosServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
