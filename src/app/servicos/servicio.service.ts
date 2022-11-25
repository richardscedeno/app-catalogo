import { IMenu, ICatalogo } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getMenu() {
    let url = "../../assets/datos/Menu.json"
    return this.http.get<IMenu[]>(url)
  }

  getCatalogo() {
    let url = "../../assets/datos/Catalogo.json"
    return this.http.get<ICatalogo[]>(url)
  }
}
