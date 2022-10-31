import { DataService } from '../../servicio/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicio/Token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 showNew= false
 isLogged = false;
  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
   if(this.tokenService.getToken()){
    this.isLogged=true;
   }else{
    this.isLogged = false;
   }
  }

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
    }
     login(){
      this.router.navigate(['/login'])
     }

  toggleShowNew(){
    if(this.showNew){
      this.saveNew();
      this.showNew = false;
    }
}
  saveNew() {
    throw new Error('Method not implemented.');
  }
}
