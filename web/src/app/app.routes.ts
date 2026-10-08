import { Routes } from '@angular/router';

import { AppShell } from './app-shell/app-shell';
import { HomePage } from './pages/home-page/home-page';

import { TodayPage } from './pages/today-page/today-page';
import { WeekPage } from './pages/week-page/week-page';
import { ReportPage } from './pages/report-page/report-page';
import { SetupPage } from './pages/setup-page/setup-page';
import { WrongPage } from './pages/wrong-page/wrong-page';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: '', component: HomePage, pathMatch: 'full' },

      { path: 'today', component: TodayPage },
      { path: 'week', component: WeekPage },
      { path: 'report', component: ReportPage },
      { path: 'setup', component: SetupPage },

      { path: '**', component: WrongPage },
    ],
  },
];
