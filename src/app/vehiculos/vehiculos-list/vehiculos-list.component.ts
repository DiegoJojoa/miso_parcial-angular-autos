import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../models/vehiculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  contadorListaPorMarca: Array<[string, number]> = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data;

        // Calcula totales por marca
        const counts: Record<string, number> = data.reduce((acc, v) => {
          acc[v.marca] = (acc[v.marca] ?? 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        // Se ordena alfabéticamente por marca
        this.contadorListaPorMarca = Object.entries(counts).sort((a, b) =>
          a[0].localeCompare(b[0])
        );
      },
      error: (e) => console.error('Error cargando vehículos', e),
    });
  }
}
