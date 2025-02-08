import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CheckboxI } from '../../shared/interfaces/checkbox.interface';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() config: CheckboxI = {
    label: '',
    checked: false,
    control: new FormControl(false),
  };

  ngOnChanges() {
    console.log(this.config);
  }
  @Output() onChange = new EventEmitter();

  onHandleChange(event: Event) {
    this.onChange.emit(event);
  }
}
