import { SExperienciaService } from './../../servicio/s-experiencia.service';
import { TokenService } from './../../servicio/Token.service';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: Experiencia[] = [];



  constructor(private SExperienciaService: SExperienciaService, private tokenService: TokenService) { }
   isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

   if (this.tokenService.getToken()){
       this.isLogged = true;
   }else {
    this.isLogged = false;
   }
  }

  cargarExperiencia():void{
    this.SExperienciaService.list().subscribe(data => {this.expe = data;})

  }

  delete(id?: number){
    if(id != undefined){
      this.SExperienciaService.delete(id).subscribe(
data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
