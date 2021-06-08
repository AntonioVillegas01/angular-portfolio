import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../services/productos.service";
import {ProductosInterface} from "../../interfaces/productos.interface";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styles: []
})
export class PortafolioComponent implements OnInit {


  productos: ProductosInterface[] = [] ;
  cargando: boolean = true

  constructor(private productosService: ProductosService) {
  }

  ngOnInit(): void {
    this.cargando = true
    this.cargarProductos()
  }

  cargarProductos() {
    this.productosService.cargarProductos()
      .subscribe((resp) => {
        console.log(resp)
        this.productos = resp
        this.cargando = false
      })
  }
}
