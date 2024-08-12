import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private toastrService = inject(ToastrService);
  private router = inject(Router);

  private API_URL = 'http://localhost:3000/login';

  // Hacemos la petición para verificar credenciales
  login(credential: Credentials) {
    return this.httpClient.post(this.API_URL, credential);
  }

  // Obtener el token generado al iniciar sesión
  getToken() {
    return localStorage.getItem('token');  // Obtiene el token del localStorage
  }

  //Validaciónn si se está logeado o no
  isLogged() {
    return this.getToken() ? true : false ;
  }

  // Hacemos el cierre de sesión
  logout() {
    this.toastrService.info('Sesión cerrada', 'Adiós');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
