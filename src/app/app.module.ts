import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PotrosaciComponent } from './components/potrosaci/potrosaci.component';
import { DodajpotrosacaComponent } from './components/dodajpotrosaca/dodajpotrosaca.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdatePotrosacaComponent } from './components/update-potrosaca/update-potrosaca.component';
import { UpdatePotrosacModalComponent } from './components/update-potrosac-modal/update-potrosac-modal.component';
import { ProdavciComponent } from './components/prodavci/prodavci.component';
import { StatistikaComponent } from './components/statistika/statistika.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NapraviProdajuFormComponent } from './components/napravi-prodaju-form/napravi-prodaju-form.component';
import { NapraviProdajuModalComponent } from './components/napravi-prodaju-modal/napravi-prodaju-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PotrosaciComponent,
    DodajpotrosacaComponent,
    ModalComponent,
    UpdatePotrosacaComponent,
    UpdatePotrosacModalComponent,
    ProdavciComponent,
    StatistikaComponent,
    LoginComponent,
    RegisterComponent,
    NapraviProdajuFormComponent,
    NapraviProdajuModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
