import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-todo-analytics',
  imports: [MatProgressSpinnerModule],
  templateUrl: './todo-analytics.component.html',
  styleUrl: './todo-analytics.component.scss',
})
export class TodoAnalyticsComponent {}
