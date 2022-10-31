import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { TokenService } from 'src/app/servicio/Token.service';
import { AuthServices } from 'src/app/servicio/auth.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [TokenService],
})

export class LoginComponent  implements OnInit{
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthServices, private router: Router) { }


  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLogginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
  }


 onlogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
     this.authService
      .login(this.loginUsuario).subscribe(data=> {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;

      })
      }
      defaultErrorLogger(console: any, ...values: any[]) {
        console.error(values);
    }

   }


