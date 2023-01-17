import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProdajaService } from 'src/app/services/prodaja.service';
import { Potrosac } from 'src/app/types/potrosac';
import { Prodaja } from 'src/app/types/prodaja';
@Component({
  selector: 'app-napravi-prodaju-form',
  templateUrl: './napravi-prodaju-form.component.html',
  styleUrls: ['./napravi-prodaju-form.component.css'],
})
export class NapraviProdajuFormComponent {
  @Input() potrosac: any = {} as any;

  opis: string = '';
  cena: number = 0;

  constructor(private prodajaService: ProdajaService, private router: Router) {}
  submitForm() {
    if (
      (sessionStorage.getItem('id') != null,
      this.opis != null,
      this.cena != null)
    ) {
      let prodaja: Prodaja = {
        kupac_id: this.potrosac.potrosac.id,
        prodavac_id: sessionStorage.getItem('id'),
        opis: this.opis,
        cena: this.cena,
      } as Prodaja;

      this.prodajaService.napraviProdaju(prodaja);
    }

    this.router.navigateByUrl('/login');
  }
}
