import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  authService = inject(AuthService);
  userService = inject(UsersService);

  allUsers: any[] = [];

  closeSesion(){
    this.authService.logout();
  }

  //obtener datos
  obtenerDatos() {
    this.userService.getUsers().subscribe((res: any) => {
      if (res) {
        // console.log('res', res);
        this.allUsers = res.usuarios;
        console.log(this.allUsers)
      } else {
        console.error('hubo un error');
      }
    });
  }

  borrarDatos(id: string) {
    const token = this.authService.getToken(); // Obtener el token del localStorage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Incluir el token en los headers
    });
  
    this.userService.deleteUser(id, { headers }).subscribe(
      (res: any) => {
        if (res) {
          alert('usuario eliminado');
          window.location.reload();
          this.obtenerDatos(); // Actualiza la lista de usuarios
        } else {
          console.error('hubo un error');
        }
      }
    );
  }

  // ciclo de vida
  ngOnInit() {
    this.obtenerDatos();
  }

}
