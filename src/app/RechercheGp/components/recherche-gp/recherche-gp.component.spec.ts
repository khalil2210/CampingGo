import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheGpComponent } from './recherche-gp.component';

describe('RechercheGpComponent', () => {
  let component: RechercheGpComponent;
  let fixture: ComponentFixture<RechercheGpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheGpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheGpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
