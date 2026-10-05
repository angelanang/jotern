import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { DEFAULT_TAGS, TIME_BY_TAG, TODAY_ENTRIES } from '../../shared/demo-data';

@Component({
  selector: 'app-today',
  imports: [Icon],
  templateUrl: './today.html',
})
export class Today {
  protected readonly tags = DEFAULT_TAGS;
  protected readonly entries = TODAY_ENTRIES;
  protected readonly timeByTag = TIME_BY_TAG;

  // TODO(Angela, by hand): a reactive form (FormGroup: date, text, hours, minutes, tags,
  // difficulty, solution, learned, position), validation (1 min to 24 h, NF-08),
  // the error "Add the time spent so the week adds up." only after submit,
  // then EntriesService.create() and refresh the list and the dashboard.
}
