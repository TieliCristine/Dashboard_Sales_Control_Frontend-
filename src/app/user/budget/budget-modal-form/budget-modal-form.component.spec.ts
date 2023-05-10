import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetModalFormComponent } from './budget-modal-form.component';

describe('BudgetModalComponent', () => {
  let component: BudgetModalFormComponent;
  let fixture: ComponentFixture<BudgetModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetModalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
