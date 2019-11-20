import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  get(clave: string) : Array<any> | Object {
    if (clave) {
      if (localStorage.getItem(clave))
      return JSON.parse(
        localStorage.getItem(clave)
        )
    }
  }

  set(clave: string, datos: Array<any> | Object): void {
    localStorage.setItem(
      clave, 
      JSON.stringify(datos) 
      ) 
     
  }

  remove(clave: string): void {
     return localStorage.removeItem(clave)
  }



}

