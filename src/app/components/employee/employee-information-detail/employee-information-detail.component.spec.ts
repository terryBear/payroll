import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInformationDetailComponent } from './employee-information-detail.component';

describe('EmployeeInformationDetailComponent', () => {
  let component: EmployeeInformationDetailComponent;
  let fixture: ComponentFixture<EmployeeInformationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeInformationDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
