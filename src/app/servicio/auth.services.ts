import { LoginUsuario } from './../models/login-usuario';
import { NuevoUsuario } from './../models/nuevo-usuario';

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { JwtDto } from '../models/jwt-dto';


@Injectable({
  providedIn: "root"
})
export class AuthServices {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario)
  }

  public login(logiUsuario:LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', logiUsuario)
  }

}
