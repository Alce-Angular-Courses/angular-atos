import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titulo: string;
  constructor() {
  }

  ngOnInit() {
    this.titulo = 'Curso de Angular'
  }

}
