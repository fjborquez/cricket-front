import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelResultadosAnualesComponent } from './subpanel-resultados-anuales.component';

describe('SubpanelResultadosAnualesComponent', () => {
  let component: SubpanelResultadosAnualesComponent;
  let fixture: ComponentFixture<SubpanelResultadosAnualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpanelResultadosAnualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpanelResultadosAnualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
