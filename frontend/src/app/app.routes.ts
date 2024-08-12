import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'admin', component: AdminComponent },  // Protege la ruta /admin
];
