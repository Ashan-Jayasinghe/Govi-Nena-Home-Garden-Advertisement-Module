import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-planting-materials',
  templateUrl: './planting-materials.page.html',
  styleUrls: ['./planting-materials.page.scss'],
})
export class PlantingMaterialsPage implements OnInit {

  selectedCard: string = '';
  
  constructor(private navCtrl: NavController) {}
  
  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }
  
  navigateTo(type: string) {
    if (type === 'seeds') {
      this.navCtrl.navigateForward('planting-materials-seeds');
    } else if (type === 'seedlings') {
      this.navCtrl.navigateForward('planting-materials-seedlings');
    }else if (type === 'tubers') {
      this.navCtrl.navigateForward('planting-materials-tubers');
    }
  }

  ngOnInit() {
  }

}
