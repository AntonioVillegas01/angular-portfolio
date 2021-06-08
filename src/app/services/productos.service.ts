import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductosInterface} from "../interfaces/productos.interface";
import {Observable} from "rxjs";
import {ProductosDescripcionInterface} from "../interfaces/producto-descripcion.interface";

const firebaseUrl = environment.fireBaseUrl

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true
  productos: ProductosInterface[] = [] ;
  productosFiltrado: ProductosInterface[] = [] ;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  cargarProductos():Observable<ProductosInterface[]>{
    return this.http.get<ProductosInterface[]>(`${firebaseUrl}/productos_idx.json`)
  }

  cargarBusqueda(){
    return new Promise<void>((resolve,reject) => {
      this.http.get<ProductosInterface[]>(`${firebaseUrl}/productos_idx.json`)
        .subscribe( (resp:ProductosInterface[]) =>{
          this.productos =resp
          this.cargando = false
          resolve();
        })
    })
  }

  cargarProductoPorId(id:string):Observable<ProductosDescripcionInterface>{
    return this.http.get<ProductosDescripcionInterface>(`${firebaseUrl}/productos/${id}.json`)
  }

  buscarProducto(termino: string){
    if(this.productos.length === 0){
      this.cargarBusqueda().then( () => {
        //ejecutar despues de tener los product
        this.filtrarProductos(termino)
      })
    }else{
      // aplicar el filto
      this.filtrarProductos(termino)
    }

  }

  filtrarProductos(termino:string){
   // console.log(this.productos)
    this.productosFiltrado = [];

    termino = termino.toLowerCase()

    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLowerCase()

      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod)
       // console.log(this.productosFiltrado)
      }
    })
  }
}
