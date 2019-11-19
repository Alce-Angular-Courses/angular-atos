import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
  nombre: string;
  mensaje: string;
  constructor() { }

  ngOnInit() {
    this.nombre = 'amigo';
    this.mensaje = 'Escribe aqui tu nombre'
  }

  onBorrar(ev) {
    console.log(ev)
    this.nombre = ''
  }

}
