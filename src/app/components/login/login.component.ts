import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { loginResult } from 'src/app/types/loginResult';
import { Prodavac } from 'src/app/types/prodavac';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.getItem('id') !== null) {
      this.router.navigateByUrl('/');
    }
  }

  async login() {
    const loginResult = await this.loginService.login(
      this.email,
      this.password
    );

    // console.log(loginResult);

    if (loginResult.status) {
      sessionStorage.setItem('id', loginResult.prodavac.id);
      sessionStorage.setItem(
        'fullname',
        loginResult.prodavac.ime + ' ' + loginResult.prodavac.prezime
      );

      this.router.navigateByUrl('/');
    }

    console.log(sessionStorage.getItem('fullname'));
  }

  register() {
    this.router.navigateByUrl('/register');
  }
}
