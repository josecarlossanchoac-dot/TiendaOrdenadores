import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenadoresList } from './ordenadores-list';

describe('OrdenadoresList', () => {
  let component: OrdenadoresList;
  let fixture: ComponentFixture<OrdenadoresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenadoresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenadoresList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
