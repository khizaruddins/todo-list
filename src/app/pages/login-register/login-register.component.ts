import { Component, DestroyRef, inject } from '@angular/core';
import { InputI } from '../../shared/interfaces/input.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../core/input/input.component';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../core/button/button.component';
import { ButtonI } from '../../shared/interfaces/button.interface';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxComponent } from '../../core/checkbox/checkbox.component';

@Component({
  selector: 'app-login-register',
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    MatIconModule,
    ButtonComponent,
    MatCheckboxModule,
    CheckboxComponent,
  ],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.scss',
})
export class LoginRegisterComponent {
  info = {
    title: 'Welcome',
    subtitle: "Hello! Let's pen down your thoughts and dreams.",
    desc: 'Create account and keep track of your thinking by saving it on cloud servers.',
    mode: 'login',
  };
  router = inject(Router);
  actRoute = inject(ActivatedRoute);
  subs: Subscription[] = [];
  destroyRef = inject(DestroyRef);
  loginBtnConfig: ButtonI = {
    width: '25%',
    height: '5rem',
    btnType: 'outlined',
    label: 'Login',
    type: 'submit',
    preIcon: 'lock_closed',
  };

  registerBtnConfig: ButtonI = {
    width: '25%',
    height: '5rem',
    btnType: 'outlined',
    label: 'Register',
    type: 'submit',
    preIcon: 'lock_opened',
  };

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // on router change
        this.initForm();
        this.initFormConfig();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.subs.forEach((sub) => sub.unsubscribe());
    });
    this.subs.push(
      this.actRoute.queryParams.subscribe((val) => {
        this.info.mode = val['mode'];
        if (typeof val['mode'] === 'undefined') {
          this.router.navigate([], {
            queryParams: { mode: 'login' },
            queryParamsHandling: 'merge',
          });
        }
      })
    );
    // on load
    this.initForm();
    this.initFormConfig();
  }
  fb = inject(FormBuilder);
  // config init
  loginFormConfig: any;
  registerFormConfig: any;

  // form init
  loginFormGroup: FormGroup = {} as FormGroup;
  registerFormGroup: FormGroup = {} as FormGroup;

  initForm() {
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
          ),
        ],
      ],
      remember: ['', Validators.required],
    });

    this.registerFormGroup = this.fb.group({
      fname: ['', [Validators.required, Validators.min(3), Validators.max(20)]],
      lname: ['', [Validators.required, Validators.min(3), Validators.max(20)]],
      email: ['', [Validators.required, Validators.email]],
      pass: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
          ),
        ],
      ],
      repass: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
          ),
        ],
      ],
      terms: [false, [Validators.required]],
    });
  }

  initFormConfig() {
    this.loginFormConfig = {
      email: {
        label: 'Enter your email',
        field: 'input',
        type: 'email',
        name: 'email',
        placeholder: 'abc@abc.com',
        control: this.getControl('login', 'email'),
        value: '',
        errorMessage: {
          required: 'Field required',
          email: 'Invalid email',
        },
      },
      pass: {
        label: 'Enter your password',
        field: 'input',
        type: 'password',
        name: 'pass',
        placeholder: 'eg. *******',
        control: this.getControl('login', 'pass'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
      remember: {
        field: 'checkbox',
        label: 'Remember me',
        checked: false,
        control: this.getControl('login', 'remember'),
      },
    };

    this.registerFormConfig = {
      fname: {
        field: 'input',
        label: 'Enter your first name',
        type: 'text',
        name: 'fname',
        placeholder: 'Eg. John',
        control: this.getControl('register', 'fname'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
      lname: {
        field: 'input',
        label: 'Enter your last name',
        type: 'text',
        name: 'lname',
        placeholder: 'Eg. Doe',
        control: this.getControl('register', 'lname'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
      email: {
        field: 'input',
        label: 'Enter your email',
        type: 'email',
        name: 'email',
        placeholder: 'abc@abc.com',
        control: this.getControl('register', 'email'),
        value: '',
        errorMessage: {
          required: 'Field required',
          email: 'Invalid Email',
        },
      },
      pass: {
        field: 'input',
        label: 'Enter your password',
        type: 'password',
        name: 'pass',
        placeholder: 'Eg. ******',
        control: this.getControl('register', 'pass'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
      repass: {
        field: 'input',
        label: 'Please retype password',
        type: 'password',
        name: 'repass',
        placeholder: 'Eg. ******',
        control: this.getControl('register', 'repass'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
      terms: {
        field: 'checkbox',
        label:
          'I agree to terms and condition to utilize my data to create an account and use it for future reference',
        checked: false,
        control: this.getControl('register', 'terms'),
        errorMessage: {
          required: 'Field Required',
        },
      },
    };
  }

  objectKeys(object: {}) {
    return Object.keys(object);
  }

  getControl(group: string, controlName: string) {
    return group === 'login'
      ? this.loginFormGroup.get(controlName)!
      : this.registerFormGroup.get(controlName);
  }

  toggleLoginSignupForm() {
    this.router.navigate([], {
      queryParams: {
        mode: this.info.mode === 'login' ? 'register' : 'login',
      },
      queryParamsHandling: 'merge',
    });
  }

  onLoginSubmit() {
    if (this.loginFormGroup.valid) {
      console.log(this.loginFormGroup.value);
    } else {
      this.loginFormGroup.markAllAsTouched();
    }
  }

  onSignupSubmit() {
    if (this.registerFormGroup.valid) {
      console.log(this.registerFormGroup.value);
    } else {
      this.registerFormGroup.markAllAsTouched();
    }
  }
}
