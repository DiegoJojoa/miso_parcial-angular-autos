import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculosListComponent } from './vehiculos-list.component';
import { VehiculosService } from '../services/vehiculos.service';
import { of } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let mockVehiculosService: jasmine.SpyObj<VehiculosService>;

  const mockVehiculos: Vehiculo[] = [
    {
      id: 1,
      marca: 'Mazda',
      linea: 'CX',
      referencia: 'CX5',
      modelo: 2017,
      kilometraje: 1,
      color: 'Blanco',
      imagen: '',
    },
    {
      id: 2,
      marca: 'Chevrolet',
      linea: 'Spark',
      referencia: 'Huevo',
      modelo: 2018,
      kilometraje: 2,
      color: 'Plata',
      imagen: '',
    },
    {
      id: 3,
      marca: 'Kia',
      linea: 'K',
      referencia: 'k3',
      modelo: 2019,
      kilometraje: 3,
      color: 'Rojo',
      imagen: '',
    },
  ];

  beforeEach(async () => {
    mockVehiculosService = jasmine.createSpyObj('VehiculosService', [
      'getVehiculos',
    ]);
    mockVehiculosService.getVehiculos.and.returnValue(of(mockVehiculos));

    await TestBed.configureTestingModule({
      imports: [VehiculosListComponent, HttpClientTestingModule],
      providers: [
        { provide: VehiculosService, useValue: mockVehiculosService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with three rows plus header', () => {
    fixture.detectChanges();
    const table: HTMLTableElement | null =
      fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    // Se obtiene las filas de la tabla
    const rows = table?.querySelectorAll('tr');
    // 4 filas: 1 encabezado + 3 datos
    expect(rows?.length).toBe(4);

    // Verifica que las filas de datos tengan la marca correcta
    expect(rows?.[1].textContent).toContain('Mazda');
    expect(rows?.[2].textContent).toContain('Chevrolet');
    expect(rows?.[3].textContent).toContain('Kia');
  });

  it('should calculate contadorListaPorMarca correctly', () => {
    expect(component.contadorListaPorMarca).toEqual([
      ['Chevrolet', 1],
      ['Kia', 1],
      ['Mazda', 1],
    ]);
  });
});
