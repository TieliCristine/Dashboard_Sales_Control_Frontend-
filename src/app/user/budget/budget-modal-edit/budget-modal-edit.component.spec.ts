import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetModalEditComponent } from './budget-modal-edit.component';

describe('BudgetModalEditComponent', () => {
  let component: BudgetModalEditComponent;
  let fixture: ComponentFixture<BudgetModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetModalEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
