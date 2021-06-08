import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from "../../services/info-pagina.service";
import {InfoPaginaInterface} from "../../interfaces/info-pagina.interface";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear()
  infoPagina: InfoPaginaInterface = {}

  constructor(public infoPaginaService: InfoPaginaService) {
}

  ngOnInit(): void {
    this.infoPagina = this.infoPaginaService.info;
  }

}
