import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon, IconName } from '../../shared/icon/icon';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected readonly items: { path: string; label: string; icon: IconName }[] = [
    { path: '/today', label: 'Today', icon: 'today' },
    { path: '/week', label: 'Week', icon: 'week' },
    { path: '/report', label: 'Report', icon: 'report' },
    { path: '/setup', label: 'Setup', icon: 'setup' },
  ];
}
