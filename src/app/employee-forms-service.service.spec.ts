import { TestBed } from '@angular/core/testing';

import { EmployeeFormsServiceService } from './employee-forms-service.service';

describe('EmployeeFormsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFormsServiceService = TestBed.get(EmployeeFormsServiceService);
    expect(service).toBeTruthy();
  });
});
