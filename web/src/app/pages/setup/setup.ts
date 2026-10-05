import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { DEFAULT_TAGS } from '../../shared/demo-data';

@Component({
  selector: 'app-setup',
  imports: [Icon, RouterLink],
  templateUrl: './setup.html',
})
export class Setup {
  protected readonly tags = DEFAULT_TAGS;

  // TODO(Angela, by hand): a reactive form for the Internship (company, supervisorName,
  // school, startDate, endDate, tags: add, rename, remove), then PUT /api/internship.
}
