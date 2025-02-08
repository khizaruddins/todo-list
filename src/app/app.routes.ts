import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/todo-page/todo-page.component').then(
            (c) => c.TodoPageComponent
          ),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/login-register/login-register.component').then(
        (c) => c.LoginRegisterComponent
      ),
  },
];
