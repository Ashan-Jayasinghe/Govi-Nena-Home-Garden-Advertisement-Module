import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.page.html',
  styleUrls: ['./fertilizers.page.scss'],
})

export class FertilizersPage implements OnInit {
 
  selectedCard: string = '';
  
  constructor(private navCtrl: NavController) {}
  
  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }
  
  navigateTo(type: string) {
    if (type === 'organic') {
      this.navCtrl.navigateForward('fertilizers-organic');
    } else if (type === 'inorganic') {
      this.navCtrl.navigateForward('fertilizers-inorganic');
    }
  }

  ngOnInit() {
  }

}
