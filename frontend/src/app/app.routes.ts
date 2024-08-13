import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'admin', component: AdminComponent, canActivate:[authGuard] },  // Protege la ruta /admin
];
