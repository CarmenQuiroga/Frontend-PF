import { SExperienciaService } from 'src/app/servicio/s-experiencia.service';
import { Experiencia } from './../../models/experiencia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
    expLab : Experiencia = null;

  constructor(private SExperienciaService: SExperienciaService, private activateRouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.SExperienciaService.detail(id).subscribe(
      data =>{
      this.expLab = data;
    }, err =>{
      alert("Error al editar experiencia");
      this.route.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.SExperienciaService.update(id, this.expLab).subscribe(
      data => {
        this.route.navigate(['']);
    }, err =>{
      alert("Error al modificar experiencia");
       this.route.navigate(['']);
      }
    )
  }
}
