import { TestBed } from '@angular/core/testing';

import { SkillsDevelopmentService } from './skills-development.service';

describe('SkillsDevelopmentService', () => {
  let service: SkillsDevelopmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsDevelopmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
