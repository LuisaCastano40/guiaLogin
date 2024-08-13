import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  // verificamos si está o no logeado y si es admin o no
  const isLoggedIn = authService.isLogged();
  const isAdmin = authService.isAdmin();

  // si no está logueado que se vaya a inicio
  if (!isLoggedIn) {
    router.navigate(['/']);
    return false;
  }

  // si estamos logueados, accedemos a admin pero no somos admin, redirecionar a inicio
  if (!isAdmin) {
    router.navigate(['/']);
    return false;
  }

  return true; // Usuario autenticado y es administrador
};
