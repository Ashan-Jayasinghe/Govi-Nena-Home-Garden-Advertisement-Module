import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agro-chemicals',
  templateUrl: './agro-chemicals.page.html',
  styleUrls: ['./agro-chemicals.page.scss'],
})
export class AgroChemicalsPage implements OnInit {
  selectedCard: string = '';

  constructor(private navCtrl: NavController) {}

  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }

  navigateTo(type: string) {
    if (type === 'Pesticides') {
      this.navCtrl.navigateForward('agro-chemicals-pesticides');
    } else if (type === 'PGR') {
      this.navCtrl.navigateForward('agro-chemicalss-plant-growth-regulators');
    } else if (type === 'Fungicides') {
      this.navCtrl.navigateForward('agro-chemicals-fungicides');
    } else if (type === 'Herbicides') {
      this.navCtrl.navigateForward('agro-chemicals-herbicides');
    } else if (type === 'Insecticides') {
      this.navCtrl.navigateForward('agro-chemicals-insecticides');
    }
  }
  ngOnInit() {}
}
