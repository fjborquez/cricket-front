import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpanelInsidersComponent } from './subpanel-insiders.component';

describe('SubpanelInsidersComponent', () => {
  let component: SubpanelInsidersComponent;
  let fixture: ComponentFixture<SubpanelInsidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubpanelInsidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubpanelInsidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
