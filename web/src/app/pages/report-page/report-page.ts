import { Component } from '@angular/core';
import { OutlineGenerator } from './outline-generator/outline-generator';
import { TemplateCard } from './template-card/template-card';
import { OutlinePreview } from './outline-preview/outline-preview';
import { OutlineBlock } from './outline-block/outline-block';

@Component({
  imports: [OutlineGenerator, TemplateCard, OutlinePreview, OutlineBlock],
  selector: 'app-report-page',
  styleUrl: './report-page.css',
  templateUrl: './report-page.html',
})
export class ReportPage {}
