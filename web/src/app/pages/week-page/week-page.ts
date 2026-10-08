import { Component } from '@angular/core';
import { WeekHeader } from './week-header/week-header';
import { WeekSummary } from './week-summary/week-summary';
import { DayColumn } from './day-column/day-column';

@Component({
  imports: [WeekHeader, WeekSummary, DayColumn],
  selector: 'app-week-page',
  styleUrl: './week-page.css',
  templateUrl: './week-page.html',
})
export class WeekPage {}
