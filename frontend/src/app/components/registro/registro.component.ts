import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { Admin } from '../../interfaces/admin';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input() toggleLogin: () => void = () => { }
  @Input() closeModal: () => void = () => { };

  toastrService = inject(ToastrService);
  userService = inject(UsersService);

  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', Validators.required),
    esAdmin: new FormControl('', Validators.required),
    imagen: new FormControl() // Para el archivo, sin valor inicial
  });

  getData() {
    const { nombre, correo, contrasenia, esAdmin } = this.registerForm.value;
    const isAdmin = esAdmin === 'si'; // true si esAdmin es 'si', de lo contrario false

    if (typeof nombre === 'string' && typeof correo === 'string' && typeof contrasenia === 'string' && !isAdmin) {
      const usuario: User = {
        nombreCompleto: nombre,
        correo,
        contrasena: contrasenia,
        // imagen: this.registerForm.value.imagen ? this.registerForm.value.imagen.name : undefined
      };
      return usuario;
    }
    return null;
  }

  handdleSubmit(){
    console.log('submit');

    if (this.registerForm.invalid) {
      alert('Ingrese todos los campos correctamente');
      return;
    }

    const userData = this.getData();
    if (userData) {
      this.userService.createUser(userData).subscribe((res: any) => {
        if (res) {
          console.log('Usuario registrado exitosamente', res);
        } else {
          console.error('Hubo un error en el registro');
        }
      });
    } else {
      console.error('Los datos no son válidos para un usuario normal.');
    }
  }
}
