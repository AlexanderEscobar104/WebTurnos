import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Turns } from '../models/turns';


@Injectable({
  providedIn: 'root'
})
export class TurnsService {

 

   //url conexion a backend
   urlApi= environment.conexionApi + 'Turnos'

   constructor(private http:HttpClient) { }
 
   //metodo para generar y traer todas los turnos
   getInsertTurns(fecha_inicio: Date, fecha_fin: Date, servicio : string){
     return this.http.get<Turns[]>(this.urlApi+"/listTurnos?Fecha_inicio=" + fecha_inicio + "&Fecha_fin=" + fecha_fin + "&Id_Servicio=" + servicio )
   }
 
    //metodo para traer todas los turnos
    getTurns(){
        return this.http.get<Turns[]>(this.urlApi+"/getTurnos" )
    }
 
}
