import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'ats-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Input() id: number;
  @Output() tareaChange: EventEmitter<number>
  @Output() tareaDelete: EventEmitter<number>
  papelera : IconDefinition;

  constructor() {
    this.tareaChange = new EventEmitter()
    this.tareaDelete = new EventEmitter()
   }

  ngOnInit() {
    this.tarea = {...this.tarea}
    this.papelera = faTrashAlt
    // this.tarea = JSON.parse(JSON.stringify(this.tarea))
  }

  onChange() {
    console.log('Cambio')
    this.tareaChange.next(this.id)
  }
  onDelete() {
    this.tareaDelete.next(this.id)
  }

}
