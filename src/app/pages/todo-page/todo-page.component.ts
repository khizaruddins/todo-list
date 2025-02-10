import { Component, inject } from '@angular/core';
import { LoaderComponent } from '../../core/loader/loader.component';
import { VarsService } from '../../services/vars.service';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { TodoAnalyticsComponent } from './components/todo-analytics/todo-analytics.component';

@Component({
  selector: 'app-todo-page',
  imports: [LoaderComponent, TodoDashboardComponent, TodoAnalyticsComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  public varsService = inject(VarsService);

  ngOnInit() {}
}
