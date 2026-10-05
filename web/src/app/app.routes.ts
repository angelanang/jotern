import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'today' },
  { path: 'today', title: 'Today · Jotern', loadComponent: () => import('./pages/today/today').then((m) => m.Today) },
  { path: 'week', title: 'Week · Jotern', loadComponent: () => import('./pages/week/week').then((m) => m.Week) },
  { path: 'report', title: 'Report · Jotern', loadComponent: () => import('./pages/report/report').then((m) => m.Report) },
  { path: 'setup', title: 'Setup · Jotern', loadComponent: () => import('./pages/setup/setup').then((m) => m.Setup) },
  { path: '**', redirectTo: 'today' },
];
