import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class StatistikaService {
  constructor() {}

  statistikaData: any = [{}];

  async getStatistika(
    datum_prodaje_od: string,
    datum_prodaje_do: string,
    prodavac_id: string | null
  ) {
    await axios
      .post('http://localhost:2000/prodaja/statistika', {
        datum_prodaje_od: datum_prodaje_od,
        datum_prodaje_do: datum_prodaje_do,
        prodavac_id: prodavac_id,
      })
      .then((data) => (this.statistikaData = data))
      .catch((error) => console.log(error));

    //  console.log(this.statistikaData.data);
    return this.statistikaData.data;
  }
}
