import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegistroComponent],
  templateUrl: './menu-navegacion.component.html',
  styleUrl: './menu-navegacion.component.css'
})
export class MenuNavegacionComponent {
  isVisibleLogin: boolean = false;
  isVisibleRegister: boolean = false;

  toggleLogin(){
    this.isVisibleLogin = !this.isVisibleLogin;
    this.isVisibleRegister = false;
    console.log('activar login')
  }

  toggleRegister(){
    this.isVisibleRegister = !this.isVisibleRegister;
    this.isVisibleLogin = false;
  }
}
