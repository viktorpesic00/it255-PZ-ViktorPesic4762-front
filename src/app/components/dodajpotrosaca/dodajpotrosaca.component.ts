import { Component } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
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

  submitForm() {
    console.log(this.potrosac);
  }
}
