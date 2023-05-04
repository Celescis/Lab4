import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Actor } from '../../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestoreService:Firestore) { }

 guardarActor(actor:Actor)
 {
  const col=collection(this.firestoreService,"actores");
  return addDoc(
    col,
    {
      nombre: actor.nombre,
      apellido: actor.apellido,
      edad: actor.edad,
      pais: actor.pais,
      foto: actor.foto
    }
  );
 }
}
