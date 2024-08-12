import { Component } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { RegistroComponent } from '../../components/registro/registro.component';
import { MenuNavegacionComponent } from '../../components/menu-navegacion/menu-navegacion.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [LoginComponent, RegistroComponent, MenuNavegacionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
