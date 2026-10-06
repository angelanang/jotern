import { Routes } from '@angular/router';

import { Today } from './today/today';
import { Week } from './week/week';
import { Report } from './report/report';
import { Setup } from './setup/setup';
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
