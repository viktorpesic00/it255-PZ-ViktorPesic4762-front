import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Potrosac } from 'src/app/types/potrosac';
@Component({
  selector: 'app-napravi-prodaju-modal',
  templateUrl: './napravi-prodaju-modal.component.html',
  styleUrls: ['./napravi-prodaju-modal.component.css'],
})
export class NapraviProdajuModalComponent {
  potrosac: Potrosac = {} as Potrosac;

  constructor(
    public dialogRef: MatDialogRef<NapraviProdajuModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.potrosac = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
