import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.page.html',
  styleUrls: ['./advertisement-page.page.scss'],
})
export class AdvertisementPagePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToDetailsPage() {
    this.navCtrl.navigateForward('/post-ad-home-page');
  }

}
