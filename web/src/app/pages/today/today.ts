import { Component } from '@angular/core';
import { DayEntries } from './today-elements/day-entries/day-entries';
import { DayStreak } from './today-elements/day-streak/day-streak';
import { EntriesHighlights } from './today-elements/entries-highlights/entries-highlights';
import { EntryForm } from './today-elements/entry-form/entry-form';
import { HourStreak } from './today-elements/hour-streak/hour-streak';
import { TagProductivity } from './today-elements/tag-productivity/tag-productivity';
import { Greetings } from './today-elements/greetings/greetings';

@Component({
  imports: [DayEntries, DayStreak, EntriesHighlights, EntryForm, HourStreak, TagProductivity, Greetings],
  selector: 'app-today',
  styleUrl: './today.css',
  templateUrl: './today.html',
})
export class Today {}
