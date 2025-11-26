import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrdenador } from './editar-ordenador';

describe('EditarOrdenador', () => {
  let component: EditarOrdenador;
  let fixture: ComponentFixture<EditarOrdenador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarOrdenador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrdenador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
