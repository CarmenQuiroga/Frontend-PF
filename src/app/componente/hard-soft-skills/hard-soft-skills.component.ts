import { TokenService } from './../../servicio/Token.service';
import { Skill } from 'src/app/models/skill';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/servicio/skill.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
   skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) { }
   isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.skillS.list().subscribe(
      data => {
        this.skill = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar el Skill");
        }
      )
    }
  }

}
