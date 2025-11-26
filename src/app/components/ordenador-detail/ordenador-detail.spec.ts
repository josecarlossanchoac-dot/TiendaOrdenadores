import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadorDetail } from './ordenador-detail';

describe('OrdenadorDetail', () => {
  let component: OrdenadorDetail;
  let fixture: ComponentFixture<OrdenadorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenadorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenadorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
