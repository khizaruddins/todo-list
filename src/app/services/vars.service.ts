import { Injectable } from '@angular/core';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class VarsService {
  constructor() {}
  isPageLoading = false;
  drawer: MatDrawer = {} as MatDrawer;
  refs = {
    todoListRef: {} as HTMLDivElement,
    inprogressListRef: {} as HTMLDivElement,
    completedListRef: {} as HTMLDivElement,
  };
  setDrawer(drawer: MatDrawer) {
    this.drawer = drawer;
  }

  setTodoListRef(ref: HTMLDivElement) {
    this.refs.todoListRef = ref;
  }
  setInprogressListRef(ref: HTMLDivElement) {
    this.refs.inprogressListRef = ref;
  }
  setCompletedListRef(ref: HTMLDivElement) {
    this.refs.completedListRef = ref;
  }
}
