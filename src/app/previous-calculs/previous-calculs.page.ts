import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-previous-calculs',
  templateUrl: './previous-calculs.page.html',
  styleUrls: ['./previous-calculs.page.scss'],
})
export class PreviousCalculsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  onGoHome() {
    this.navCtrl.navigateBack('/home');
  }
}
