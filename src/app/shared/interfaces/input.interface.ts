import { ErrorI } from './error.interface';

export interface InputI {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  control: any;
  errorMessage: ErrorI;
}
