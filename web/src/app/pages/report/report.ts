import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-report',
  imports: [Icon],
  templateUrl: './report.html',
})
export class Report {
  // TODO(Angela, by hand): "Build report outline" → GET /api/report/outline (the ENSPD
  // template filled from the logs), show it below, then "Download .md".
}
