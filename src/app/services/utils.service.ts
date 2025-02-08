import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  snackbarRef = inject(MatSnackBar);

  openSnackbar(message: any) {
    this.snackbarRef.open(message, 'DISMISS');
  }
}
