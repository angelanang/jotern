import { Component } from '@angular/core';
import { inject } from '@angular/core';

import { EntryCard } from '../../../shared/ui/entry-card/entry-card';

import { DatePipe } from '@angular/common';
import { DateService } from '../../../date.service';

@Component({
  imports: [EntryCard, DatePipe],
  selector: 'app-entry-list',
  styleUrl: './entry-list.css',
  templateUrl: './entry-list.html',
})
export class EntryList {
  protected dateService = inject(DateService);
}
