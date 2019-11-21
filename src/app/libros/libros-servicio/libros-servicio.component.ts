import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ats-libros-servicio',
  templateUrl: './libros-servicio.component.html',
  styleUrls: ['./libros-servicio.component.css']
})
export class LibrosServicioComponent implements OnInit {
  fcClave: FormControl
  libros: Array<LibroModel>

  constructor(private LibrosService: LibrosService) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.libros = []
  }

  buscar() {
    this.LibrosService.get2017(this.fcClave.value)
    .then( (response: Array<LibroModel>) => {
      this.libros = response
      console.log(response)
    })
  }

  buscarRx() {}
}
