import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PotrosaciComponent } from './components/potrosaci/potrosaci.component';
import { ProdavciComponent } from './components/prodavci/prodavci.component';
import { RegisterComponent } from './components/register/register.component';
import { StatistikaComponent } from './components/statistika/statistika.component';

const routes: Routes = [
  { path: '', component: PotrosaciComponent },
  {
    path: 'prodavci',
    component: ProdavciComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'statistika',
    component: StatistikaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
