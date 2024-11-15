import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-harvest-market',
  templateUrl: './harvest-market.page.html',
  styleUrls: ['./harvest-market.page.scss'],
})
export class HarvestMarketPage implements OnInit {
  selectedCard: string = '';

  constructor(private navCtrl: NavController) {}

  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }

  navigateTo(type: string) {
    if (type === 'fruits') {
      this.navCtrl.navigateForward('fruits-page');
    } else if (type === 'vegetables') {
      this.navCtrl.navigateForward('vegetables-page');
    } else if (type === 'grains') {
      this.navCtrl.navigateForward('grains-page');
    } else if (type === 'herbs') {
      this.navCtrl.navigateForward('herbs-page');
    } else if (type === 'nuts-seeds') {
      this.navCtrl.navigateForward('nuts-seeds-page');
    } else if (type === 'flowers') {
      this.navCtrl.navigateForward('flowers-page');
    }
  }
  ngOnInit() {
  }


}
