import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelMapaComponent } from './subpanel-mapa.component';

describe('SubpanelMapaComponent', () => {
  let component: SubpanelMapaComponent;
  let fixture: ComponentFixture<SubpanelMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpanelMapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpanelMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
