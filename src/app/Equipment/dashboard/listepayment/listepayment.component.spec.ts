import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepaymentComponent } from './listepayment.component';

describe('ListepaymentComponent', () => {
  let component: ListepaymentComponent;
  let fixture: ComponentFixture<ListepaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListepaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
