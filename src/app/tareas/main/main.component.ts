import { Component, OnInit } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'ats-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tareas: Array<TareaModel>;
  animo: string;
  storeKey: string;
  constructor(private  storageService: StorageService) { }

  ngOnInit() {
    this.storeKey = 'tareas'
    this.animo = 'Animate con tu primera tarea';
    this.tareas = 
      this.storageService.get(this.storeKey) as Array<TareaModel>
      || []
    console.log(this.tareas)
  }

  addTarea(tarea: TareaModel) {
    this.tareas.push(tarea)
    this.actualizarStore()
  }

  onChange(i: number) {
    this.tareas[i].isCompleted = !this.tareas[i].isCompleted
    this.actualizarStore()
  }

  onDelete(i: number) {
    this.tareas.splice(i, 1)
    this.actualizarStore()

  }

  private actualizarStore() {
    this.storageService.set(this.storeKey, this.tareas )
  }
}
