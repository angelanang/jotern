import { Component } from '@angular/core';
import { inject } from '@angular/core';

import { DatePipe } from '@angular/common';
import { DateService } from '../../date.service';

import { StatTimePerWeek } from './stat-time-per-week/stat-time-per-week';
import { StatDaysPerWeek } from './stat-days-per-week/stat-days-per-week';
import { StatTimeByTag } from './stat-time-by-tag/stat-time-by-tag';
import { StatDifficulties } from './stat-difficulties/stat-difficulties';

import { EntryForm } from './entry-form/entry-form';
import { EntryList } from './entry-list/entry-list';

@Component({
  imports: [
    DatePipe,
    StatTimePerWeek,
    StatDaysPerWeek,
    StatTimeByTag,
    StatDifficulties,
    EntryForm,
    EntryList,
  ],
  selector: 'app-today-page',
  styleUrl: './today-page.css',
  templateUrl: './today-page.html',
})
export class TodayPage {
   protected dateService = inject(DateService);
  }
