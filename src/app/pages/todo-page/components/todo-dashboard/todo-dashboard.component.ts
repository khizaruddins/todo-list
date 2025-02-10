import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../core/button/button.component';
import { ButtonI } from '../../../../shared/interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-dashboard',
  imports: [
    ButtonComponent,
    MatRippleModule,
    MatIconModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './todo-dashboard.component.html',
  styleUrl: './todo-dashboard.component.scss',
})
export class TodoDashboardComponent {
  createBtnConfig: ButtonI = {
    type: 'button',
    label: 'Create Task',
    preIcon: 'add',
    btnType: 'basic',
    width: '17rem',
    height: '5rem',
  };

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inprogress = ['Take a shower', 'Check e-mail', 'Walk dog'];
  completed = ['Get up', 'Brush teeth'];

  onAddTodo(category: string) {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
