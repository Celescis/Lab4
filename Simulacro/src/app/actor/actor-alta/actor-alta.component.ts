import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../../servicios/firestore/firestore.service';
import { Actor } from '../../clases/actor'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {
  actor: Actor = new Actor('', '', '', '', 0);
  pais: string;
  nombreValido: boolean = false;
  apellidoValido: boolean = false;
  edadValido: boolean = false;

  constructor(private firestoreService: FirestoreService, private router: Router) {
    this.pais = "";
  }

  onBotonClickeado($event: any) {
    this.pais = $event;
    this.actor.pais = this.pais;
  }

  guardarActor() {
    if (!this.actor.nombre || !this.actor.apellido || !this.actor.edad || !this.actor.pais) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, complete todos los campos del formulario'
      });
      return;
    }
  
    this.firestoreService.guardarActor(this.actor);
  
    this.limpiar();
  
    Swal.fire({
      icon: 'success',
      title: 'Actor guardado correctamente',
      showConfirmButton: false,
      timer: 1500
    });
  }
  

  validarNombre() {
    if (this.actor.nombre.match(/^[a-zA-Z ]+$/)) {
      this.nombreValido = true;
    } else {
      this.nombreValido = false;
    }
  }
  
  validarApellido() {
    if (this.actor.apellido.match(/^[a-zA-Z ]+$/)) {
      this.apellidoValido = true;
    } else {
      this.apellidoValido = false;
    }
  }

  validarEdad()
  {
    if (this.actor.edad < 18 || this.actor.edad > 100) {
      this.edadValido = false;
    } else {
      this.edadValido = true;
    }
  }

  limpiar() {
    this.actor = new Actor('', '', '', '', 0);
    this.pais = '';
  }

  volver() {
    this.router.navigate(['/busqueda'])
  }
}
