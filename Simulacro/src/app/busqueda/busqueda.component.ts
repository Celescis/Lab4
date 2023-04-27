import { Component } from '@angular/core';
import { ETipoPelicula, Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  unaPelicula: any;
  listadoPeliculas?: Pelicula[]

  constructor() {
    this.listadoPeliculas = [
      {
        id: 1,
        nombre: 'Tiburon',
        tipo: ETipoPelicula.Otros,
        fechaEstreno: new Date('1975/07/31'),
        cantidadPublico: 2000,
        foto: './assets/imagenes/tiburon.png'
      },
      {
        id: 2,
        nombre: 'Gremlins',
        tipo: ETipoPelicula.Terror,
        fechaEstreno: new Date('1984/08/23'),
        cantidadPublico: 4000,
        foto: './assets/imagenes/gremlins.png'
      },
      {
        id: 3,
        nombre: 'Your Name',
        tipo: ETipoPelicula.Amor,
        fechaEstreno: new Date('2016/08/26'),
        cantidadPublico: 5000,
        foto: './assets/imagenes/your_name.png'
      }
    ]
  }

  Detalle($event: any) {
    this.unaPelicula = $event;
  }
}
