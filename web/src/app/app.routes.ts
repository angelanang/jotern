import { Routes } from '@angular/router';

import { Today } from './pages/today/today';
import { Week } from './pages/week/week';
import { Report } from './pages/report/report';
import { Setup } from './pages/setup/setup';
import { BaseLayout } from './layout/base-layout/base-layout';

export const routes: Routes = [
  {
    path: '',
    component: BaseLayout,
    children: [
      { path: 'today', component: Today },
      { path: 'week', component: Week },
      { path: 'report', component: Report },
      { path: 'setup', component: Setup },
    ],
  },
];
