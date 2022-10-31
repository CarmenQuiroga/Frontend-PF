export class Skill{
   id: number;
   nombreSkill: string;
   porcentaje: number;
   fotoSkill: string;


   constructor(nombreSkill: string, porcentaje: number, fotoSkill: string){
     this.nombreSkill = nombreSkill;
     this.porcentaje = porcentaje;
     this.fotoSkill = fotoSkill;
   }
}
