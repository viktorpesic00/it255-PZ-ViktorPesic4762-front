import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Potrosac } from 'src/app/types/potrosac';

@Component({
  selector: 'app-update-potrosac-modal',
  templateUrl: './update-potrosac-modal.component.html',
  styleUrls: ['./update-potrosac-modal.component.css'],
})
export class UpdatePotrosacModalComponent {
  potrosac: Potrosac = {} as Potrosac;

  constructor(
    public dialogRef: MatDialogRef<UpdatePotrosacModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.potrosac = this.data;
  }

  onNoClick(): void {
    window.location.reload();
    this.dialogRef.close();
  }
}
