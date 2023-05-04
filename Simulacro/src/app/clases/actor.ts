
export class Actor {

    nombre: string;
    apellido: string;
    pais: string;
    foto: string;
    edad: number;

    constructor(nombre: string, apellido: string, pais: string, foto: string, edad: number) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.foto = foto;
        this.edad = edad;
    }
}