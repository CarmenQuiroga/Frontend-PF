

import { DataService } from '../../servicio/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NeweducationComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  fechaE: string= '';
  constructor(private DataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

   onCreate(): void{
    const educar = new Education(this.nombreE, this.descripcionE, this.fechaE);
    this.DataService.save(educar).subscribe(
      data =>{
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
              alert("Falló al intentar agragar Educación");
        this.router.navigate(['']);
      }
    )
   }
  }
