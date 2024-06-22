import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryActionsPanelComponent } from './secondary-actions-panel.component';

describe('SecondaryActionsPanelComponent', () => {
  let component: SecondaryActionsPanelComponent;
  let fixture: ComponentFixture<SecondaryActionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryActionsPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryActionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
