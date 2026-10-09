import { Component } from '@angular/core';
import { inject } from '@angular/core';

import { DatePipe } from '@angular/common';
import { DateService } from '../../../date.service';

@Component({
  imports: [DatePipe],
  selector: 'app-entry-form',
  styleUrl: './entry-form.css',
  templateUrl: './entry-form.html',
})
export class EntryForm {
  protected dateService = inject(DateService);
}
