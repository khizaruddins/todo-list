import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/todo-page/todo-page.component').then(
            (c) => c.TodoPageComponent
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./pages/notifications/notifications.component').then(
            (c) => c.NotificationsComponent
          ),
      },
      {
        path: 'urgent',
        loadComponent: () =>
          import('./pages/urgent/urgent.component').then(
            (c) => c.UrgentComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (c) => c.ProfileComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
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
