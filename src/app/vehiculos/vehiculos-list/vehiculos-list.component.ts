import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { Vehiculo } from '../models/vehiculo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculos-list',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe({
      next: (data) => (this.vehiculos = data),
      error: (e) => console.error('Error cargando vehículos', e)
    });
  }
}