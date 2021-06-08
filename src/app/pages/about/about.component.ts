import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from "../../services/info-pagina.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  equipo:any [] = [];

  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
    this.cargarEquipo();
   console.log(this.equipo)
  }

  cargarEquipo(){
    this.infoPaginaService.cargarEquipo()
      .subscribe((resp:any) =>{
        this.equipo = resp
        console.log(resp)
      })
  }

}
