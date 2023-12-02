import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { TripleInfoModuleComponent } from './triple-info-module/triple-info-module.component';
import { ExchangeRateCalculatorComponent } from './exchange-rate-calculator/exchange-rate-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    TripleInfoModuleComponent,
    ExchangeRateCalculatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
