import { Experiencia } from './../../models/experiencia';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/servicio/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string='';
  descripcionE: string='';
  fechaE: string='';
  tareaE: string='';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
   onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fechaE, this.tareaE);
    this.sExperiencia.save(expe).subscribe
      (data=>{alert("Experiencia añadida");
    this.router.navigate(['']);
   }, err =>{
      alert("Falló");
      this.router.navigate(['']);
   }
    )
  }
}
