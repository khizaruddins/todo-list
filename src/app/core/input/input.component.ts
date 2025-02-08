import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputI } from '../../shared/interfaces/input.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() config: InputI = {
    label: '',
    type: 'text',
    placeholder: '',
    name: '',
    value: '',
    control: new FormControl(''),
    errorMessage: {
      required: 'Field required',
      max: 'Max length exceeded',
      min: 'Min length exceeded',
      pattern: 'Invalid',
      email: 'Invalid Email',
    },
  };
  @Output() outputs = new EventEmitter();

  onInputChange(event: Event): void {
    this.outputs.emit(event);
  }
}
