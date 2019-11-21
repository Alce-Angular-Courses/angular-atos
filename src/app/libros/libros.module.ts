import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { LibrosServicioComponent } from './libros-servicio/libros-servicio.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LibrosComponent, LibrosGoogleComponent, LibrosServicioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
