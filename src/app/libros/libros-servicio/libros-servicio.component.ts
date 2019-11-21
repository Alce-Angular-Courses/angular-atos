import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LibroModel } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ats-libros-servicio',
  templateUrl: './libros-servicio.component.html',
  styleUrls: ['./libros-servicio.component.css']
})
export class LibrosServicioComponent implements OnInit {
  fcClave: FormControl
  libros: Array<LibroModel>
  // libros$: Observable<Array<LibroModel>>

  constructor(private LibrosService: LibrosService) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.libros = []
  }

  buscar() {
    this.LibrosService.get(this.fcClave.value)
    .then( (response: Array<LibroModel>) => {
      this.libros = response
      console.log(response)
      this.fcClave.reset()
    })
  }

  buscarAsync() {
    this.LibrosService.get2017(this.fcClave.value)
    .then( (response: Array<LibroModel>) => {
      this.libros = response
      console.log(response)
      this.fcClave.reset()
    })
  }

  buscarRx() {
    // this.libros$ = 
    this.LibrosService.getRx(this.fcClave.value).subscribe(
      (response: Array<LibroModel>) => {
        this.libros = response
        console.log(response)
        this.fcClave.reset()
      }
    )

  }
}
