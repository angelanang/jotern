import { Component } from '@angular/core';
import { BasicsForm } from './basics-form/basics-form';
import { TagEditor } from './tag-editor/tag-editor';

@Component({
  imports: [BasicsForm, TagEditor],
  selector: 'app-setup-page',
  styleUrl: './setup-page.css',
  templateUrl: './setup-page.html',
})
export class SetupPage {}
