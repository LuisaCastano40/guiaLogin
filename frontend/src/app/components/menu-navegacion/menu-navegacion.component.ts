import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-navegacion',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegistroComponent],
  templateUrl: './menu-navegacion.component.html',
  styleUrl: './menu-navegacion.component.css'
})
export class MenuNavegacionComponent {

  authService = inject(AuthService);
  isVisibleLogin: boolean = false;
  isVisibleRegister: boolean = false;

  toggleLogin(){
    this.isVisibleLogin = !this.isVisibleLogin;
    this.isVisibleRegister = false;

  }

  toggleRegister(){
    this.isVisibleRegister = !this.isVisibleRegister;
    this.isVisibleLogin = false;
  }

  closeModal(){
    this.isVisibleLogin = false;
    this.isVisibleRegister = false;
  }

  closeSesion(){
    this.authService.logout();
  }
}
