import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';

@NgModule({
  imports: [
    CommonModule,
    VehiculosListComponent,
  ],
  exports: [VehiculosListComponent]
})
export class VehiculosModule {}
