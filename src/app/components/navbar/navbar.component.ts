import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  ime = sessionStorage.getItem('fullname');
  constructor(private router: Router) {}

  ngOnInit() {
    if (sessionStorage.getItem('id') === null) {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('fullname');
    this.router.navigateByUrl('/login');
  }
}
