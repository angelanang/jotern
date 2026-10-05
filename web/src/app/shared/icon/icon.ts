import { Component, input } from '@angular/core';

export type IconName =
  | 'today' | 'week' | 'report' | 'setup' | 'chevron' | 'edit' | 'delete'
  | 'download' | 'plus' | 'arrow-left' | 'arrow-right';

/** Line icons drawn in the current text colour. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  host: { style: 'display: inline-flex' },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(18);
}
