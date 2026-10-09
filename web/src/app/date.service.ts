import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateService {
  readonly currentDate = signal(new Date());
}
