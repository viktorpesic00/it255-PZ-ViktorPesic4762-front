import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdavacService } from 'src/app/services/prodavac.service';
import { Prodavac } from 'src/app/types/prodavac';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  prodavac: Prodavac = {} as Prodavac;

  constructor(
    private prodavacService: ProdavacService,
    private router: Router
  ) {}
  ngOnInit() {
    if (sessionStorage.getItem('id') !== null) {
      this.router.navigateByUrl('/');
    }
  }

  login() {
    this.router.navigateByUrl('/login');
  }
  async register() {
    const registerData = await this.prodavacService.register(this.prodavac);

    if (registerData.status) {
      sessionStorage.setItem('id', registerData.prodavac.id);
      sessionStorage.setItem(
        'fullname',
        registerData.prodavac.ime + ' ' + registerData.prodavac.prezime
      );

      this.router.navigateByUrl('/');
    } else {
      alert('login failed');
    }
  }
}
