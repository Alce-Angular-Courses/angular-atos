import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LibroModel } from '../models/libro.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.urlBooks
   }

   get(clave: string): Promise<Array<LibroModel>> {
     return this.http.get(this.url+clave)
     .toPromise()
     .then ( (response: any) => {
       return response.items.map(
         (item: any) => {
           return new LibroModel(item.volumeInfo.authors, 
            item.volumeInfo.title)
         }
       )
     })
   }


   async get2017(clave: string): Promise<Array<LibroModel>> {
    
    let response: any = await this.http.get(this.url+clave).toPromise()
    response = response.items.map(
        (item: any) => {
          return new LibroModel(item.volumeInfo.authors, 
           item.volumeInfo.title)
        })
    return new Promise( (resolve) => resolve(response) )
  }

   getRx(clave: string): Observable<Array<LibroModel>>  {
    return this.http.get(this.url+clave).pipe(
      map( (response: any) => response.items.map(
        item => {
          return new LibroModel(item.volumeInfo.authors, 
           item.volumeInfo.title)
        }
      ))
    )
   }
}
