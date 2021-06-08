import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {InfoPaginaInterface} from "../interfaces/info-pagina.interface";

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPaginaInterface ={};
  cargada: boolean = false
  firebaseUrl: string = 'https://angular-html-ce17b-default-rtdb.firebaseio.com/equipo.json'

  constructor(private http: HttpClient) {
    this.cargarInfo()

  }

   cargarInfo(){
     this.http.get('assets/data/data-pagina.json')
       .subscribe((resp:InfoPaginaInterface) => {
         this.info = resp
         this.cargada = true
       })
   }

   cargarEquipo(){
    return this.http.get(this.firebaseUrl)
   }

}
