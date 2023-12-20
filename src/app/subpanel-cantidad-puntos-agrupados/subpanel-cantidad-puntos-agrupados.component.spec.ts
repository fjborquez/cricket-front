import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelPuntosPorEmpresaComponent } from './subpanel-cantidad-puntos-agrupados.component';

describe('SubpanelPuntosPorEmpresaComponent', () => {
  let component: SubpanelPuntosPorEmpresaComponent;
  let fixture: ComponentFixture<SubpanelPuntosPorEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpanelPuntosPorEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpanelPuntosPorEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
