import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vegetables-fruits',
  templateUrl: './vegetables-fruits.page.html',
  styleUrls: ['./vegetables-fruits.page.scss'],
})
export class VegetablesFruitsPage implements OnInit {

  selectedCard: string = '';
  
  constructor(private navCtrl: NavController) {}
  
  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }
  
  navigateTo(type: string) {
    if (type === 'Vegetables') {
      this.navCtrl.navigateForward('vegetables-fruits-vegetables');
    } else if (type === 'Fruits') {
      this.navCtrl.navigateForward('vegetables-fruits-fruits');
    }else if (type === 'Other') {
      this.navCtrl.navigateForward('agro-chemicals-other');
    }
  }

  ngOnInit() {
  }

}
