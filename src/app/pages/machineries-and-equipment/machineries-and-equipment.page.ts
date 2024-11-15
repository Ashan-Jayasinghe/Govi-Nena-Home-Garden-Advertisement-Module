import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-machineries-and-equipment',
  templateUrl: './machineries-and-equipment.page.html',
  styleUrls: ['./machineries-and-equipment.page.scss'],
})
export class MachineriesAndEquipmentPage implements OnInit {

selectedCard: string = '';
  machineries = [
    { className: 'Tractors', image: 'assets/tractor.jpg', title: 'Tractors' },
    { className: 'Tillage', image: 'assets/tillage.jpg', title: 'Tillage' },
    { className: 'IrrigationSystems', image: 'assets/irrigation_system.jpg', title: 'Irrigation Systems' },
    { className: 'Sprayers', image: 'assets/sprayer.jpg', title: 'Sprayers' },
    { className: 'Dryers', image: 'assets/dryer.jpg', title: 'Dryers' },
    { className: 'HarvestingMachines', image: 'assets/harvesting_machine.jpg', title: 'Harvesting Machines' },
    { className: 'PlantingMachines', image: 'assets/planting_machine.jpg', title: 'Planting Machines' },
    { className: 'Other', image: 'assets/other.jpg', title: 'Other' },
  ];

  constructor(private navCtrl: NavController) {}

  selectCard(type: string) {
    this.selectedCard = type;
    this.navigateTo(type);
  }

  navigateTo(type: string) {
    const routes: { [key: string]: string } = {
      Tractors: 'machineries-tractors',
      Tillage: 'machineries-tillage',
      IrrigationSystems: 'machineries-irrigation-systems',
      Sprayers: 'machineries-sprayers',
      Dryers: 'machineries-dryers',
      HarvestingMachines: 'machineries-harvesting-machines',
      PlantingMachines: 'machineries-planting-machines',
      Other: 'machineries-other',
    };

    const route = routes[type];
    if (route) {
      this.navCtrl.navigateForward(route);
    }
  }

  ngOnInit() {}
}
