import { FormControl } from '@angular/forms';
import { ErrorI } from './error.interface';

export interface CheckboxI {
  label: string;
  control: FormControl;
  checked: boolean;
  errorMessage: ErrorI;
}
