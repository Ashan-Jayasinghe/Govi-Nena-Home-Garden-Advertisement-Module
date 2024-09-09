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
    if (type === 'Pestisides') {
      this.navCtrl.navigateForward('agro-chemicals-pesticides');
    } else if (type === 'Plant-Growth-Regulators') {
      this.navCtrl.navigateForward('agro-chemicalss-plant-growth-regulators');
    }else if (type === 'Other') {
      this.navCtrl.navigateForward('agro-chemicals-other');
    }
  }

  ngOnInit() {
  }

}
