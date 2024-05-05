import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'vdm-buy-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './buy-dialog.component.html',
  styleUrl: './buy-dialog.component.scss'
})
export class BuyDialogComponent {
  constructor(private dialogRef: MatDialog) {}

  close() {
    this.dialogRef.closeAll();
  }
}
