import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCourcesComponent } from './all-cources.component';

describe('AllCourcesComponent', () => {
  let component: AllCourcesComponent;
  let fixture: ComponentFixture<AllCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
