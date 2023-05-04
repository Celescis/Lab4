import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesApiService } from 'src/app/servicios/paises_api/paises-api.service';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styleUrls: ['./paises-tabla.component.css']
})
export class PaisesTablaComponent {
@Output() botonClickeado = new EventEmitter<any>();
  paises: any[] = [];

  constructor(private paisService: PaisesApiService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((data: any[]) => {
      this.paises = data;
    });
  }

  onBotonClickeado(nombre:string) {
    this.botonClickeado.emit(nombre);
  }

}
