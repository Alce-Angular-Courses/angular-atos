import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludarRxComponent } from './saludar-rx.component';

describe('SaludarRxComponent', () => {
  let component: SaludarRxComponent;
  let fixture: ComponentFixture<SaludarRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludarRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludarRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
