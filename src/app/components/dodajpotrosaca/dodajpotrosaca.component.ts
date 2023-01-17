import { Component } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

import { PotrosacServiceService } from '../../services/potrosac-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dodajpotrosaca',
  templateUrl: './dodajpotrosaca.component.html',
  styleUrls: ['./dodajpotrosaca.component.css'],
})
export class DodajpotrosacaComponent {
  potrosac: Potrosac = {
    id: 0,
    ime: '',
    prezime: '',
    email: '',
    broj_telefona: '',
    adresa: '',
    grad: '',
    firma: '',
    pozicija: '',
    datum_registracije: '',
    prodavac_id: '',
  };
  constructor(
    public dialog: MatDialog,
    private potrosacService: PotrosacServiceService,
    private router: Router
  ) {}

  async submitForm() {
    this.potrosac.prodavac_id = sessionStorage.getItem('id');
    await this.potrosacService.insert(this.potrosac);
    window.location.reload();
  }
}
