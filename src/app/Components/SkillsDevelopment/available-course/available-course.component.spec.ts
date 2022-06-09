import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCourseComponent } from './available-course.component';

describe('AvailableCourseComponent', () => {
  let component: AvailableCourseComponent;
  let fixture: ComponentFixture<AvailableCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
