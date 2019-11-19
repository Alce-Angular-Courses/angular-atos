import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludarComponent } from './saludar/saludar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaludarRxComponent } from './saludar-rx/saludar-rx.component';
import { SaludarLocalComponent } from './saludar-local/saludar-local.component';


@NgModule({
  declarations: [HomeComponent, SaludarComponent, SaludarRxComponent, SaludarLocalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
