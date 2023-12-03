import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exchange-rate-calculator',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './exchange-rate-calculator.component.html',
  styleUrl: './exchange-rate-calculator.component.css',
})
export class ExchangeRateCalculatorComponent implements OnInit {
  from = 'USD';
  to = 'GBP';
  amount = 0;
  rate = 0;

  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSelectFrom(value: string) {
    this.from = value;
  }
  onSelectTo(value: string) {
    this.to = value;
  }

  onKey(event: any) {
    this.amount = event.target.value;
  }

  async convert() {
    const baseURL = 'https://v6.exchangerate-api.com/v6/';
    const apiKey = 'ae24cfbd781823a7498a9878';
    let url = `${baseURL}${apiKey}/pair/${this.from}/${this.to}`;

    const response: any = await this.http.get(url).toPromise();
    if (response && response.result === 'success') {
      this.rate = response.conversion_rate * this.amount;
    } else {
      console.log('Error');
    }

    console.log('clicked', this.rate);
    console.log(response);
  }
}
