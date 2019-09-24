import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SavedCalculsService } from './saved-calculs.service';
import { Calcul } from './saved-calculs.model';


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
  public result = '0';
  // public saved: ;

  constructor(private navCtrl: NavController, private savedCalculs: SavedCalculsService) { }

  onCalculate() {
    if (this.interestPercent == null || this.monthlyInvestment == null || this.startingAmount == null || this.years == null) {
      return (this.result = '0');
    }
    // tslint:disable-next-line: max-line-length
    this.result = (this.startingAmount * (Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) + (this.monthlyInvestment * ((Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) - 1)) / ((this.interestPercent / 100) / 12)).toFixed(2);
    return this.result;
  }

  onClear() {
    this.monthlyInvestment = null;
    this.interestPercent = null;
    this.startingAmount = null;
    this.years = null;
    this.result = '0';
  }

  onSave() {
    // tslint:disable-next-line: max-line-length
    if (this.interestPercent == null || this.monthlyInvestment == null || this.startingAmount == null || this.years == null) {
      return (this.result = '0');
    } else {
      // tslint:disable-next-line: max-line-length
      this.result = (this.startingAmount * (Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) + (this.monthlyInvestment * ((Math.pow((1 + (this.interestPercent / 100) / 12), (this.years * 12))) - 1)) / ((this.interestPercent / 100) / 12)).toFixed(2);

      this.savedCalculs.calculs.push(
        new Calcul(
        this.interestPercent,
        this.startingAmount,
        this.monthlyInvestment,
        this.years,
        this.result
      ));

      this.monthlyInvestment = null;
      this.interestPercent = null;
      this.startingAmount = null;
      this.years = null;
      this.result = '0';
      return;
    }
  }

  onNavToSaved() {
    this.navCtrl.navigateForward('/previous-calculs');
  }
}
