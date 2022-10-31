export class Experiencia {
  id: number;
  nombreE: string;
  descripcionE: string;
  fechaE: string;
  tareaE:string;


  constructor(  nombreE: string, descripcionE: string, fechaE: string, tareaE: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.fechaE = fechaE;
    this.tareaE = tareaE;
  }

}

