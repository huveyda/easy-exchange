import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-triple-info-module',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './triple-info-module.component.html',
  styleUrl: './triple-info-module.component.css',
})
export class TripleInfoModuleComponent {}
