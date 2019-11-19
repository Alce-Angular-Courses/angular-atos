import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  fecha: Date;
  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo'
    this.fecha = new Date()
  }

}
