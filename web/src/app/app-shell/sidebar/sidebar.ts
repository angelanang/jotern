import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink } from './nav-link';
import { Routes } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  PageLinks: NavLink[] = [
    {
      link: 'today',
      label: 'Today',
      icon: 'today',
    },
    {
      link: 'week',
      label: 'Week',
      icon: 'week',
    },
    {
      link: 'report',
      label: 'Report',
      icon: 'report',
    },
    {
      link: 'setup',
      label: 'Setup',
      icon: 'setup',
    },
  ];
}

