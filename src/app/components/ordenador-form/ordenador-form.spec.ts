import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadorForm } from './ordenador-form';

describe('OrdenadorForm', () => {
  let component: OrdenadorForm;
  let fixture: ComponentFixture<OrdenadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenadorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenadorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
