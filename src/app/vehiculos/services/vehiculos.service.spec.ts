import { TestBed } from '@angular/core/testing';
import { VehiculosService } from './vehiculos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Vehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculosService]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(VehiculosService);
    expect(service).toBeTruthy();
  });
});