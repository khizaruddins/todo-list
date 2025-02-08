import { Component, DestroyRef, inject } from '@angular/core';
import { InputI } from '../../shared/interfaces/input.interface';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../core/input/input.component';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

interface registerFormI {
  fname: InputI;
  lname: InputI;
  email: InputI;
  pass: InputI;
  repass: InputI;
}

interface loginFormI {
  email: InputI;
  pass: InputI;
}

@Component({
  selector: 'app-login-register',
  imports: [RouterModule, ReactiveFormsModule, InputComponent, MatIconModule],
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
  subs: Subscription[] = [];
  destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('ended');
        // on router change
        this.initForm();
        this.initFormConfig();
      }
    });

    this.destroyRef.onDestroy(() => {
      this.subs.forEach((sub) => sub.unsubscribe());
    });
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
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
          ),
        ],
      ],
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
    });
  }

  ngAfterViewInit() {
    let keyarr: string[] = this.objectKeys(this.loginFormConfig);
    keyarr.forEach((key) => {
      console.log(this.loginFormConfig[key]);
    });
  }

  initFormConfig() {
    this.loginFormConfig = {
      email: {
        label: 'Enter your email',
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
        type: 'password',
        name: 'pass',
        placeholder: 'eg. *******',
        control: this.getControl('login', 'pass'),
        value: '',
        errorMessage: {
          required: 'Field required',
        },
      },
    };

    this.registerFormConfig = {
      fname: {
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

  onLoginSubmit(event: Event) {}

  onSignupSubmit(event: Event) {}
}
