import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Servicios } from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
    //url conexion a backend
  urlApi= environment.conexionApi + 'Servicios'

  constructor(private http:HttpClient) { }

  //metodo para traer los servicios
  getServices(){
    return this.http.get<Servicios[]>(this.urlApi + "/listServicios")
  }

}
