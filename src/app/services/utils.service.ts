import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VarsService } from './vars.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  snackbarRef = inject(MatSnackBar);
  varService = inject(VarsService);

  openSnackbar(message: any) {
    this.snackbarRef.open(message, 'DISMISS');
  }

  toggleDrawer() {
    this.varService.drawer.toggle();
  }
}
