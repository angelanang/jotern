import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Sidebar, RouterOutlet],
  selector: 'app-base-layout',
  styleUrl: './base-layout.css',
  templateUrl: './base-layout.html',
})
export class BaseLayout {}
