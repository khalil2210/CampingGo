import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGroupCampingComponent } from './all-group-camping.component';

describe('AllGroupCampingComponent', () => {
  let component: AllGroupCampingComponent;
  let fixture: ComponentFixture<AllGroupCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGroupCampingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllGroupCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
