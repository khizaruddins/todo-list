import { inject, Injectable, TemplateRef } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from '../core/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = inject<any>(MatDialog);
  dialogInst: any;
  openDialog(dialogConfig: MatDialogConfig) {
    this.dialogInst = this.dialog.open(DialogComponent, dialogConfig);
  }

  openDialogViaTemplateRef(
    templateRef: TemplateRef<HTMLElement>,
    dialogConfig: MatDialogConfig
  ) {
    this.dialog.open(templateRef, dialogConfig);
  }

  closeDialog() {
    this.dialogInst.close();
  }
}
