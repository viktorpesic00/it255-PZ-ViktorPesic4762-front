import { Component } from '@angular/core';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { Prodavac } from 'src/app/types/prodavac';

@Component({
  selector: 'app-prodavci',
  templateUrl: './prodavci.component.html',
  styleUrls: ['./prodavci.component.css'],
})
export class ProdavciComponent {
  prodavci: Prodavac[] = [] as Prodavac[];

  constructor(private prodavacService: ProdavacService) {
    this.prodavacService
      .getAll()
      .then((data) => (this.prodavci = data))
      .catch((error) => console.log(error));
  }
}
