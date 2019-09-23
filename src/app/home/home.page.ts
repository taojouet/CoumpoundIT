import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  interestPercent: number = null;
  years: number = null;
  monthlyInvestment: number = null;
  startingAmount: number = null;
  public result = 0;
  // public saved: ;

  constructor(private navCtrl: NavController) { }

  onCalculate() {
    // tslint:disable-next-line: max-line-length
    this.result = this.startingAmount * (Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) + (this.monthlyInvestment * ((Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) - 1)) / ((this.interestPercent / 100) / 12);
    return console.log(this.result.toFixed(2));
  }

  onClear() {
    this.monthlyInvestment = null;
    this.interestPercent = null;
    this.startingAmount = null;
    this.years = null;
    this.result = 0;

    return console.log(this.result);
  }

  onSave() {
    // this.saved.push();
  }

  onNavToSaved() {
    this.navCtrl.navigateForward('/previous-calculs');
  }
}
