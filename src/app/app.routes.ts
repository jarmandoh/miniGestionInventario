import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'movimientos',
        loadComponent() {
            return import('./pages/movimiento/movimiento.component').then(m => m.MovimientoComponent);
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'cuestionario',
        loadComponent() {
            return import('./pages/cuestionario/cuestionario.component').then(m => m.CuestionarioComponent)
        },
    },
    {
        path: 'inventario',
        loadComponent() {
            return import('./pages/inventario/inventario.component').then(m => m.InventarioComponent);
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadComponent() {
            return import('./pages/login/login.component').then(m => m.LoginComponent);
        }
    },
    {
        path: 'voz-a-texto',
        loadComponent() {
            return import('./pages/vozatexto/vozatexto.component').then(m => m.VozatextoComponent);
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
