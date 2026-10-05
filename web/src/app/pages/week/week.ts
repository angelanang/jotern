import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { TIME_BY_TAG, WEEK_DAYS } from '../../shared/demo-data';

@Component({
  selector: 'app-week',
  imports: [Icon, RouterLink],
  templateUrl: './week.html',
})
export class Week {
  protected readonly days = WEEK_DAYS;
  protected readonly timeByTag = TIME_BY_TAG;

  // TODO(Angela, by hand): load the week from WeeksService (GET /api/weeks/:week),
  // previous/next week, and "Export week" (GET /api/weeks/:week/export → download week-41.md).
}
