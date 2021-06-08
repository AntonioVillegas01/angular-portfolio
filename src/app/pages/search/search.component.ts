import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {ProductosInterface} from "../../interfaces/productos.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  productosFiltrado: ProductosInterface[] = [] ;


  constructor(private activatedRoute:ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({termino}) =>{
      console.log(termino)
      this.productoService.buscarProducto(termino)
    })
  }

}
