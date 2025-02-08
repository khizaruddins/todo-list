export interface InputI {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  control: any;
  errorMessage: {
    required?: string;
    email?: string;
    max?: string;
    min?: string;
    pattern?: string;
  };
}
