import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../servicio/data.service';
import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';


@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {
  educar: Education = null;
  constructor(private DataSvc: DataService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.DataSvc.details(id).subscribe(
      data =>{
        this.educar = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
   }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.DataSvc.update(id, this.educar).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }
}
