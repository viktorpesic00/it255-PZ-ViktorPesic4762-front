import { Injectable } from '@angular/core';
import axios from 'axios';
import { loginResult } from '../types/loginResult';
import { Prodavac } from '../types/prodavac';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  logindata: any = {};
  constructor() {}
  customConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  async login(email: string, password: string) {
    await axios
      .post('http://localhost:2000/Prodavac/login', {
        email: email,
        password: password,
      })
      .then((data) => (this.logindata = data))
      .catch((error) => console.log(error));

    return this.logindata.data;
  }
}
