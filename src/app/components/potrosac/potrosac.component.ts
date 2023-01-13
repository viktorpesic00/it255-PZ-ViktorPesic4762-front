import { Component, Input } from '@angular/core';
import { Potrosac } from 'src/app/types/potrosac';
@Component({
  selector: 'app-potrosac',
  templateUrl: './potrosac.component.html',
  styleUrls: ['./potrosac.component.css'],
})
export class PotrosacComponent {
  @Input() potrosac: Potrosac = {} as Potrosac;
}
