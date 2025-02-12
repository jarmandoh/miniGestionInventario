import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'movimientos',
        loadComponent() {
            return import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent);
        },
        /* canActivate: [authGuard] */
    },
    {
        path: 'inventario',
        loadComponent() {
            return import('./pages/inventario/inventario.component').then(m => m.InventarioComponent);
        },
    },
    {
        path: 'login',
        loadComponent() {
            return import('./pages/login/login.component').then(m => m.LoginComponent);
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
