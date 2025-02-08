import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonI } from '../../shared/interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule, NgTemplateOutlet, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() config: ButtonI = {
    width: '100%',
    height: '4rem',
    btnType: 'basic',
    label: 'Button',
    type: 'button',
    preIcon: '',
    postIcon: '',
  };

  @Output() onClick = new EventEmitter();
  handleClick(event: Event) {
    this.onClick.emit(event);
  }
}
