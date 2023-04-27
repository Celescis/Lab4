import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {
  @Input() listadoPeliculas?: any;
  @Output() unaPelicula: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {

  }

  obtenerPelicula(pelicula: any) {
    this.unaPelicula.emit(pelicula);
  }
}
