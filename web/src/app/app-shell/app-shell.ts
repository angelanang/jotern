import { Component } from '@angular/core';

import { Sidebar } from './sidebar/sidebar';
import { SyncStatus } from './sync-status/sync-status';

import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Sidebar, SyncStatus, RouterOutlet],
  selector: 'app-app-shell',
  styleUrl: './app-shell.css',
  templateUrl: './app-shell.html',
})
export class AppShell {}
