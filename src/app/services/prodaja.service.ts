import { Injectable } from '@angular/core';
import axios from 'axios';
import { Prodaja } from '../types/prodaja';

@Injectable({
  providedIn: 'root',
})
export class ProdajaService {
  constructor() {}

  prodajaData: any = {};

  async napraviProdaju(prodaja: Prodaja) {
    await axios
      .post('http://localhost:2000/Prodaja/insert', prodaja)
      .then((data) => (this.prodajaData = data))
      .catch((error) => console.log(error));

    return this.prodajaData.data;
  }
}
