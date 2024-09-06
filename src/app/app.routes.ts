import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'crear-jugada',
    loadComponent: () => import('./crear-jugada/crear-jugada.page').then( m => m.CrearJugadaPage)
  },
  {
    path: 'ver-jugada',
    loadComponent: () => import('./ver-jugada/ver-jugada.page').then( m => m.VerJugadaPage)
  },
];
