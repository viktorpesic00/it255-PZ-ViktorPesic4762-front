import { Injectable } from '@angular/core';
import { Prodavac } from '../types/prodavac';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProdavacService {
  constructor() {}

  customConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async getAll(): Promise<Prodavac[]> {
    const result = await axios.get<Prodavac[]>(
      'http://localhost:2000/Prodavac/getAll'
    );

    return result.data;
  }

  registerData: any = {};

  // async register(prodavac: Prodavac) {
  //   console.log(prodavac);
  //   await axios
  //     .post(
  //       'http://localhost:2000/Potrosac/insert',
  //       prodavac,
  //       this.customConfig
  //     )
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error));

  //   return this.registerData.data;
  // }

  async register(prodavac: Prodavac) {
    await axios
      .post('http://localhost:2000/Prodavac/insert', prodavac)
      .then((data) => (this.registerData = data))
      .catch((error) => console.log(error));

    return this.registerData.data;
  }
}
