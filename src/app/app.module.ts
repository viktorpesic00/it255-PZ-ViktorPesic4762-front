import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PotrosaciComponent } from './components/potrosaci/potrosaci.component';
import { PotrosacComponent } from './components/potrosac/potrosac.component';
import { DodajpotrosacaComponent } from './components/dodajpotrosaca/dodajpotrosaca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PotrosaciComponent,
    PotrosacComponent,
    DodajpotrosacaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
