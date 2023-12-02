import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-triple-info-module',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './triple-info-module.component.html',
  styleUrl: './triple-info-module.component.css',
})
export class TripleInfoModuleComponent {
  cardData = [
    {
      title: 'SECURE',
      content:
        'Send money online fast,secure and easy. Live tracking and notifications + flexible delivery and payment options.',
      imageUrl: '../../assets/images/heroCard.svg',
    },
    {
      title: 'EASY ACCESSIBLE',
      content:
        'Create chart for any currency pair in the world to see their currency history.This currency charts use live mid-market rates,are easy to use,and are very reliable.',
      imageUrl: '../../assets/images/accessibleCard.svg',
    },
    {
      title: 'FAST AND RELIABLE',
      content:
        'Need to know when a currency hits a specific rate? The Xe Rate alerts will let you know when the rate you need is triggered on your selected currency pairs.',
      imageUrl: '../../assets/images/fastCard.svg',
    },
  ];
}
