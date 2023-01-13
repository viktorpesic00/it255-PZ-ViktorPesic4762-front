import { Component } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
@Component({
  selector: 'app-potrosaci',
  templateUrl: './potrosaci.component.html',
  styleUrls: ['./potrosaci.component.css'],
})
export class PotrosaciComponent {
  potrosaci: Potrosac[] = [
    {
      id: 1,
      ime: 'Marko',
      prezime: 'Markovic',
      email: 'marko.markovic@gmail.com',
      broj_telefona: '061123456',
      adresa: 'Bulevar Oslobodjenja 12',
      grad: 'Novi Sad',
      firma: 'Marko Ltd',
      pozicija: 'Direktor',
      datum_registracije: '01.01.2021',
      prodavac_id: 'p1',
    },
    {
      id: 2,
      ime: 'Jelena',
      prezime: 'Jelic',
      email: 'jelena.jelic@gmail.com',
      broj_telefona: '061123457',
      adresa: 'Kralja Petra 71',
      grad: 'Beograd',
      firma: 'Jelena d.o.o.',
      pozicija: 'Menadzer',
      datum_registracije: '02.01.2021',
      prodavac_id: 'p2',
    },
    {
      id: 3,
      ime: 'Petar',
      prezime: 'Petrovic',
      email: 'petar.petrovic@gmail.com',
      broj_telefona: '061123458',
      adresa: 'Trg Republike 1',
      grad: 'Nis',
      firma: 'Petar Inc',
      pozicija: 'Vlasnik',
      datum_registracije: '03.01.2021',
      prodavac_id: 'p3',
    },
    {
      id: 4,
      ime: 'Marija',
      prezime: 'Maric',
      email: 'marija.maric@gmail.com',
      broj_telefona: '061123459',
      adresa: 'Zeleznicka 12',
      grad: 'Subotica',
      firma: 'Marija d.o.o.',
      pozicija: 'Sekretar',
      datum_registracije: '04.01.2021',
      prodavac_id: 'p4',
    },
  ];
}
