import { Component, Input } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PotrosacServiceService } from '../../services/potrosac-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-potrosaca',
  templateUrl: './update-potrosaca.component.html',
  styleUrls: ['./update-potrosaca.component.css'],
})
export class UpdatePotrosacaComponent {
  @Input() potrosac: any = {} as any;

  constructor(
    public dialog: MatDialog,
    private potrosacService: PotrosacServiceService
  ) {}

  ngOnInit() {
    console.log(this.potrosac.potrosac);
  }
  submitForm() {
    this.potrosacService.update(this.potrosac.potrosac);
  }
}
