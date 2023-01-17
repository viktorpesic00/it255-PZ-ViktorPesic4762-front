import { Component, Input } from '@angular/core';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { StatistikaService } from 'src/app/services/statistika.service';
import { Prodavac } from 'src/app/types/prodavac';

@Component({
  selector: 'app-statistika',
  templateUrl: './statistika.component.html',
  styleUrls: ['./statistika.component.css'],
})
export class StatistikaComponent {
  // @Input() prodavci: Prodavac[] = [] as Prodavac[];

  prodavci: Prodavac[] = [] as Prodavac[];
  statistika: any = [{}];

  prodavacId: string = '';

  datumOd: any = '';
  datumDo: any = '';

  constructor(
    private statistikaService: StatistikaService,
    private prodavacService: ProdavacService
  ) {
    this.prodavacService
      .getAll()
      .then((data) => (this.prodavci = data))
      .catch((error) => console.log(error));
  }

  onChange(prodavacID: any) {
    this.prodavacId = prodavacID.target.value;
  }

  async submit() {
    console.log(this.prodavacId);
    this.statistika = await this.statistikaService.getStatistika(
      this.datumOd,
      this.datumDo,
      this.prodavacId
    );
    //console.log(this.statistika);
  }
}
