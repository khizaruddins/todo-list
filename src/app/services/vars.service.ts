import { Injectable } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class VarsService {
  constructor() {}
  drawer: MatDrawer = {} as MatDrawer;
  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
