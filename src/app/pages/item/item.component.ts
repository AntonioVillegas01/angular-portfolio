import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {ProductosInterface} from "../../interfaces/productos.interface";
import {ProductosDescripcionInterface} from "../../interfaces/producto-descripcion.interface";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  producto : ProductosDescripcionInterface | undefined;
  id: string = '';


  constructor(private activatedRoute:ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      console.log(id)
      this.productosService.cargarProductoPorId(id)
        .subscribe((producto:ProductosDescripcionInterface)=>{
          this.producto = producto
          this.id = id

      })
    })
  }

}
