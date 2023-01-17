import { Injectable } from '@angular/core';
import axios from 'axios';
import { Potrosac } from 'src/app/types/potrosac';
import { PotrosaciComponent } from '../components/potrosaci/potrosaci.component';

@Injectable({
  providedIn: 'root',
})
export class PotrosacServiceService {
  constructor() {}

  customConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // async getAll(): Promise<Potrosac[]> {
  //   const result = await axios.get<Potrosac[]>(
  //     'http://localhost:2000/Potrosac/getAll'
  //   );
  //   let data = result;
  //   let lowercaseData = {} as Potrosac;

  //   Object.keys(data).forEach((key) => {
  //     if (typeof data[key] === 'string') {
  //       lowercaseData[key.toLowerCase()] = data[key];
  //     } else {
  //       lowercaseData[key] = data[key];
  //     }
  //   });

  //   return result.data;
  // }

  async getAll(): Promise<Potrosac[]> {
    const result = await axios.get<Potrosac[]>(
      'http://localhost:2000/Potrosac/getAll'
    );

    return result.data;
  }
  async insert(potrosac: Potrosac) {
    console.log(potrosac);
    const result: Potrosac = await axios.post(
      'http://localhost:2000/Potrosac/insert',
      potrosac,
      this.customConfig
    );
  }

  async delete(potrosac: Potrosac) {
    console.log(potrosac);
    const result: Potrosac = await axios.post(
      'http://localhost:2000/Potrosac/delete',
      potrosac,
      this.customConfig
    );
  }
  async update(potrosac: Potrosac) {
    console.log(potrosac);
    const result: Potrosac = await axios.post(
      'http://localhost:2000/Potrosac/update',
      potrosac,
      this.customConfig
    );
  }
}
