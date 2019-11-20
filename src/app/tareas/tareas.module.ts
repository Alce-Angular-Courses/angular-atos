import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { TareaNewComponent } from './tarea-new/tarea-new.component';
import { TareaComponent } from './tarea/tarea.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [MainComponent, TareaNewComponent, TareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
