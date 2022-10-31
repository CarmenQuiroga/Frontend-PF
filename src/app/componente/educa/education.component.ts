import { Education } from './../../models/education';

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicio/data.service';
import { FormBuilder } from '@angular/forms';
import { TokenService } from 'src/app/servicio/Token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educar: Education[] = [];


  constructor(private DataSvc: DataService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducation();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

}
cargarEducation(): void{
  this.DataSvc.lista().subscribe(
    data =>{
      this.educar = data;
    }
  )
}

delete(id?: number){
  if(id!= undefined){
    this.DataSvc.delete(id).subscribe(
      data => {
        this.cargarEducation();
      }, err => {
        alert("No se pudo eliminar");
      }
    )
  }
}

}
