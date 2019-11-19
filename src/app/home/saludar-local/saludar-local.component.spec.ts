import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludarLocalComponent } from './saludar-local.component';

describe('SaludarLocalComponent', () => {
  let component: SaludarLocalComponent;
  let fixture: ComponentFixture<SaludarLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludarLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludarLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
