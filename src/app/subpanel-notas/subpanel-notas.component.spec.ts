import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelNotasComponent } from './subpanel-notas.component';

describe('SubpanelNotasComponent', () => {
  let component: SubpanelNotasComponent;
  let fixture: ComponentFixture<SubpanelNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpanelNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpanelNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
