import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.html',
})
export class App {
  currentDate: Date = new Date();
}
