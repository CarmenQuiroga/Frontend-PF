import { EditAcercaDeComponent } from './componente/acerca-de/edit-acerca-de.component';
import { EditEducationComponent } from './componente/educa/edit-education.component';

import { EditExperienciaComponent } from './componente/experiencia/edit-experiencia.component';

import {  NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { HomeComponent } from './componente/home/home.component';
import { NewExperienciaComponent } from './componente/experiencia/new-experiencia.component';
import { NeweducationComponent } from './componente/educa/new-education.component';
import { EditSkillComponent } from './componente/hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './componente/hard-soft-skills/new-skill.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent }, //Todo: only user auth
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaeduc', component: NeweducationComponent},
  {path: 'editeduc/:id', component: EditEducationComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevaskill', component: NewSkillComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
