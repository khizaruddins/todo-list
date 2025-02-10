import { Component, inject } from '@angular/core';
import { LoaderComponent } from '../../core/loader/loader.component';
import { VarsService } from '../../services/vars.service';

@Component({
  selector: 'app-todo-page',
  imports: [LoaderComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent {
  public varsService = inject(VarsService);

  ngOnInit() {}
}
