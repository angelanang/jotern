import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-greetings',
  styleUrl: './greetings.css',
  templateUrl: './greetings.html',
})
export class Greetings {
  currentDate: Date = new Date();
}
