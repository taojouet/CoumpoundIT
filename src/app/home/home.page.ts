import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  interestPercent: any;
  years: any;
  monthlyInvestment: any;
  startingAmount: any;
  public result = 0;

  // private n = 0;

  constructor() { }

  onCalculate() {

    // for (let n = 0; n < this.numberOfYears; n++)  {
      // this.result += this.monthlyInvestment;
      // this.result = this.startingAmount * (Math.pow((1 + (this.estimatedInterestRate / 100) / 10), (this.numberOfYears * n)));
    // }

    this.result = this.startingAmount + this.monthlyInvestment + this.interestPercent + this.years;

    return console.log(this.result);
  }

  onClear() {
    this.monthlyInvestment = '';
    this.interestPercent = '';
    this.startingAmount = '';
    this.years = '';
    this.result = 0;

    return console.log(this.result);
  }
}
