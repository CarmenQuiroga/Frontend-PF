
import { NeweducationComponent } from './componente/educa/new-education.component';

import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InicioComponent } from './componente/header/inicio.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { EducationComponent } from './componente/educa/education.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { LoginComponent } from './componente/login/login.component';
import { Page404Component } from './componente/page404/page404.component';

import { FormsModule } from '@angular/forms';
import { HardSoftSkillsComponent } from './componente/hard-soft-skills/hard-soft-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componente/home/home.component';
import { interceptorProvider } from './servicio/interceptor-service';
import { NewExperienciaComponent } from './componente/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componente/experiencia/edit-experiencia.component';
import { ProyectoComponent } from './componente/proyecto/proyecto.component';
import { FooterComponent } from './componente/footer/footer.component';
import { EditEducationComponent } from './componente/educa/edit-education.component';
import { EditSkillComponent } from './componente/hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './componente/hard-soft-skills/new-skill.component';
import { EditAcercaDeComponent } from './componente/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeComponent,
    EducationComponent,
    ExperienciaComponent,
    Page404Component,
    HardSoftSkillsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ProyectoComponent,
    FooterComponent,
    NeweducationComponent,
    EditEducationComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({ }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

  ],
  providers: [
     interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
