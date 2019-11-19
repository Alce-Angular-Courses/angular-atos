import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ats-saludar-local',
  templateUrl: './saludar-local.component.html',
  styleUrls: ['./saludar-local.component.css']
})
export class SaludarLocalComponent implements OnInit {

  @ViewChild('refNombre', {static: true}) inputNombre: ElementRef
  constructor() { }

  ngOnInit() {
    console.dir(this.inputNombre.nativeElement)
  }

}
