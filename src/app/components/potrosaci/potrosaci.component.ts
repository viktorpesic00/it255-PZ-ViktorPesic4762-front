import { Component } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PotrosacServiceService } from '../../services/potrosac-service.service';
import { UpdatePotrosacModalComponent } from '../update-potrosac-modal/update-potrosac-modal.component';
import { NapraviProdajuModalComponent } from '../napravi-prodaju-modal/napravi-prodaju-modal.component';

@Component({
  selector: 'app-potrosaci',
  templateUrl: './potrosaci.component.html',
  styleUrls: ['./potrosaci.component.css'],
})
export class PotrosaciComponent {
  potrosaci: Potrosac[] = [];

  addToList(potrosac: Potrosac) {
    this.potrosaci.push(potrosac);
  }

  constructor(
    public dialog: MatDialog,
    private potrosacService: PotrosacServiceService
  ) {
    this.potrosacService
      .getAll()
      .then((data) => (this.potrosaci = data))
      .catch((error) => console.log(error));
  }

  dodajPotrosaca() {
    const dialogRef = this.dialog.open(ModalComponent, {
      panelClass: `cdk-overlay-container`,
    });
  }

  napraviProdaju(potrosac: Potrosac) {
    const dialogRef = this.dialog.open(NapraviProdajuModalComponent, {
      panelClass: `cdk-overlay-container`,
      data: {
        potrosac,
      },
    });
  }

  updatePotrosac(potrosac: Potrosac) {
    const dialogRef = this.dialog.open(UpdatePotrosacModalComponent, {
      panelClass: `cdk-overlay-container`,
      data: {
        potrosac,
      },
    });
  }

  deletePotrosac(potrosac: Potrosac) {
    this.potrosacService.delete(potrosac);
    const index = this.potrosaci.indexOf(potrosac);
    this.potrosaci.splice(index, 1);
  }

  removeObjectWithId(arr: Potrosac[], id: number) {
    const objWithIdIndex = this.potrosaci.findIndex(
      (potrosac: Potrosac) => potrosac.id === id
    );

    if (objWithIdIndex > -1) {
      this.potrosaci = this.potrosaci.splice(objWithIdIndex, 1);
    }
  }
}
