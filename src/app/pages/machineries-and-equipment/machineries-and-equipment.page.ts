import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-machineries-and-equipment',
  templateUrl: './machineries-and-equipment.page.html',
  styleUrls: ['./machineries-and-equipment.page.scss'],
})
export class MachineriesAndEquipmentPage implements OnInit {

  selectedCard: string = '';
  
  constructor(private navCtrl: NavController) {}
  
  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }
  
  navigateTo(type: string) {
    if (type === 'Tractors') {
      this.navCtrl.navigateForward('machineries-tractors');
    } else if (type === 'Tillage') {
      this.navCtrl.navigateForward('machineries-tillage');
    }else if (type === 'IrrigationSystems') {
      this.navCtrl.navigateForward('machineries-irrigation-systems');
    }else if (type === 'Sprayers ') {
      this.navCtrl.navigateForward('machineries-sprayers ');
    }else if (type === 'Dryers') {
      this.navCtrl.navigateForward('machineries-dryers');
    }else if (type === 'HarvestingMachines') {
      this.navCtrl.navigateForward('machineries-harvesting-machines');
    }else if (type === 'PlantingMachines') {
      this.navCtrl.navigateForward('machineries-planting-machines');
    }else if (type === 'Other') {
      this.navCtrl.navigateForward('machineries-other');
    }
  }


  ngOnInit() {
  }

}






