import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../core/button/button.component';
import { ButtonI } from '../../../../shared/interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDragPlaceholder,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { DialogService } from '../../../../services/dialog.service';

@Component({
  selector: 'app-todo-dashboard',
  imports: [
    ButtonComponent,
    MatRippleModule,
    MatIconModule,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    CdkDragPlaceholder,
    TodoItemComponent,
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
  dialogService = inject(DialogService);

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  inprogress = ['Take a shower', 'Check e-mail', 'Walk dog'];
  completed = ['Get up', 'Brush teeth'];

  onAddTodo(category: string) {
    this.dialogService.openDialog({
      width: '400px',
      height: '400px',
      panelClass: 'add-todo',
      data: {
        category,
      },
    });
  }

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
