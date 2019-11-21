import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareasApiService {
  urlAPI: string;
  constructor(private http: HttpClient) {
    this.urlAPI = 'https://jsonplaceholder.typicode.com/todos/'
   }

   read(n: string) {
    return this.http.get(this.urlAPI+n)
   }

   readAll() {
     return this.http.get(this.urlAPI)
   }

   create(datos: TareaModel) {
     return this.http.post(this.urlAPI, datos)
   }

   update(n:string, datos: TareaModel) {
     return this.http.patch(this.urlAPI+n, datos)
   }

   delete(n: string) {
     return this.http.delete(this.urlAPI+n)
   }

}
