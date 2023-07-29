import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyViewComponent } from './agency-view.component';

describe('AgencyViewComponent', () => {
  let component: AgencyViewComponent;
  let fixture: ComponentFixture<AgencyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
