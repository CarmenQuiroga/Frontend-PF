import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from './../../servicio/skill.service';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { getDownloadURL, listAll, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
   nombreSkill: string;
   porcentaje: number;
   fotoSkill: string;

  constructor(private skillS : SkillService, private router: Router, private activatedRoute: ActivatedRoute ) {

    }


  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombreSkill, this.porcentaje, this.fotoSkill);
     this.skillS.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al intentar añadir la nueva skill");
        this.router.navigate(['']);
      }
     )
  }

      }




