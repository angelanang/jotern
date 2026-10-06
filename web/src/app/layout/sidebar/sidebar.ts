import { Component } from '@angular/core';
import { NavLink } from './nav-link';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  links: NavLink[] = [
    {
      link: '/today',
      label: 'Today',
      icon: '',
    },
    {
      link: '/week',
      label: 'Week',
      icon: '',
    },
    {
      link: '/report',
      label: 'Report',
      icon: '',
    },
    {
      link: '/setup',
      label: 'Setup',
      icon: '',
    },
  ];
}
