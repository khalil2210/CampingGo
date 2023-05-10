import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgroupcampingComponent } from './addgroupcamping.component';

describe('AddgroupcampingComponent', () => {
  let component: AddgroupcampingComponent;
  let fixture: ComponentFixture<AddgroupcampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgroupcampingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddgroupcampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
