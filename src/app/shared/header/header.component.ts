import {Component, OnInit} from '@angular/core';
import {InfoPaginaService} from "../../services/info-pagina.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
              public infoPaginaService: InfoPaginaService) {
  }

  ngOnInit(): void {
  }

  buscarProducto(termino: string) {
    if(termino.length < 1){
      return
    }
    this.router.navigate(['/search', termino])
  }
}
