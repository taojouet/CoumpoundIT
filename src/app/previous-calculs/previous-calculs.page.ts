import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SavedCalculsService } from '../home/saved-calculs.service';
import { Calcul } from '../home/saved-calculs.model';

@Component({
  selector: 'app-previous-calculs',
  templateUrl: './previous-calculs.page.html',
  styleUrls: ['./previous-calculs.page.scss'],
})
export class PreviousCalculsPage implements OnInit {

  constructor(private navCtrl: NavController, private savedCalculs: SavedCalculsService) { }

  calculs: Calcul[] = [];

  ngOnInit() {
    this.calculs = this.savedCalculs.calculs;

    return;
  }

  onGoHome() {
    this.navCtrl.navigateBack('/home');
  }
  onClearAll() {
    this.savedCalculs.calculs = [];
    this.calculs = [];

    return;
  }
}
