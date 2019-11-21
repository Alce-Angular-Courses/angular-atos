import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LibroModel } from 'src/app/models/libro.model';

@Component({
  selector: 'ats-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {
  fcClave: FormControl;
  url: string;
  libros: Array<LibroModel>

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fcClave = new FormControl()
    this.url = environment.urlBooks
    this.libros = []
  }

  buscar() {
    if(! this.fcClave.value) {
      return
    }
    const urlFinal = this.url + this.fcClave.value
    this.http.get(urlFinal).toPromise()
    .then( 
      (response: any) => { 
        this.libros = response.items.map(
          (item: any) => {    
            return new LibroModel(item.volumeInfo.authors, 
                item.volumeInfo.title)
          }
        )
        console.log(this.libros)
      
      }
    )
  }

}
