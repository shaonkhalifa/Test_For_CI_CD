import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaEditComponent } from './visa-edit.component';

describe('VisaEditComponent', () => {
  let component: VisaEditComponent;
  let fixture: ComponentFixture<VisaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
