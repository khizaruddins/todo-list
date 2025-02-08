import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../core/loader/loader.component';

@Component({
  selector: 'app-todo-page',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  isPageLoading = false;

  ngOnInit() {}
}
