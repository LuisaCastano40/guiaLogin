import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from '../../interfaces/credentials';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // funcion recibida de padre
  @Input() toggleRegister: () => void = () => { };
  @Input() closeModal: () => void = () => { };

  // Inyección de dependencias
  toastrService = inject(ToastrService);
  authService = inject(AuthService);
  router = inject(Router);

  credentialsForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  // obtengo las credenciales del form y las paso a un objeto credenciales, que debe respetar la estructura de la interfaz

  getCredentials() {
    const username = this.credentialsForm.value.username;
    const password = this.credentialsForm.value.password;

    if (typeof username === 'string' && typeof password === 'string') {
      const credenciales: Credentials = {
        username,
        password,
      }
      return credenciales;
    }
    return null;
  }

  // inicio sesión
  handleSubmit() {
    const credentials = this.getCredentials();
    console.log(credentials)

    if (credentials) {
      this.authService.login(credentials).subscribe({
        next: (res: any) => {
          if (res) {
            this.toastrService.success(res.mensaje);
            setTimeout(() => {
              localStorage.setItem('token', res.datos);
              this.credentialsForm.reset();
              // this.closeModal();
              this.authService.redirectUser();
            }, 500)
          }
        },
        error: (err) => {
          console.log(err.error.mensaje)
          this.toastrService.warning(err.error.mensaje);
          this.credentialsForm.reset();
        }

      });
    }
  }

}