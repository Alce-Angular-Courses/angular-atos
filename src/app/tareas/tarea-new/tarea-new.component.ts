import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'ats-tarea-new',
  templateUrl: './tarea-new.component.html',
  styleUrls: ['./tarea-new.component.css']
})
export class TareaNewComponent implements OnInit {
  fcNombre: FormControl;
  tarea: TareaModel;
  @Output() addTarea: EventEmitter<TareaModel>

  constructor() {
    this.addTarea = new EventEmitter()
   }

  ngOnInit() {
    this.fcNombre = new FormControl()
  }

  onAdd() {
    if (!this.fcNombre.value){
      return
    }
    this.tarea = new TareaModel(this.fcNombre.value)
    this.fcNombre.reset()
    this.addTarea.next(this.tarea)
  }
}
