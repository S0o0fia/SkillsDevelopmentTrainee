import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDevelopmentLoginComponent } from './skills-development-login.component';

describe('SkillsDevelopmentLoginComponent', () => {
  let component: SkillsDevelopmentLoginComponent;
  let fixture: ComponentFixture<SkillsDevelopmentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDevelopmentLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDevelopmentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
