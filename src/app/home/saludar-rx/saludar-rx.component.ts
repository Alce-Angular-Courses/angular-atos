import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ats-saludar-rx',
  templateUrl: './saludar-rx.component.html',
  styleUrls: ['./saludar-rx.component.css']
})
export class SaludarRxComponent implements OnInit {

  fcNombre: FormControl;

  constructor() { }

  ngOnInit() {
    this.fcNombre = new FormControl()
    this.fcNombre.setValue('amigo')
  }

  onBorrar(ev) {
    this.fcNombre.setValue('')
  }

}
