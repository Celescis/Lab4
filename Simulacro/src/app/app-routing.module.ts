import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: "bienvenido", component: BienvenidoComponent },
  { path: "busqueda", component: BusquedaComponent },
  { path: "peliculas/alta", component: PeliculaAltaComponent },
  { path: "peliculas/listado", component: PeliculaListadoComponent },
  { path: "actor/alta", component: ActorAltaComponent },
  { path: "actor/listado", component: ActorListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
