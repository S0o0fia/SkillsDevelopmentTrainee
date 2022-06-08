import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDevelopmentRegisterComponent } from './skills-development-register.component';

describe('SkillsDevelopmentRegisterComponent', () => {
  let component: SkillsDevelopmentRegisterComponent;
  let fixture: ComponentFixture<SkillsDevelopmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDevelopmentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDevelopmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
